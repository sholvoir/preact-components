/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { emptyDir } from '@std/fs/empty-dir';
import { copy } from '@std/fs/copy';
import * as esbuild from "esbuild";
import { denoPlugins } from "esbuild-deno-loader";

const outdir = './dest';

const tail = new Deno.Command('tailwindcss', {
    args: ['-i', './styles.css', '-o', `${outdir}/styles.css`], stdout: 'inherit', stderr: 'inherit'
});
const uno = new Deno.Command(Deno.execPath(), {
    args: ['-A', 'npm:@unocss/cli', 'src/**/*', '-o', 'dest/styles.css'], stdout: 'inherit', stderr: 'inherit'
})
const serve = new Deno.Command(Deno.execPath(), {
    args: ['-A', 'jsr:@std/http/file-server', `${outdir}/`], stdout: 'inherit', stderr: 'inherit'
});

const esb = async (release = false) => {
    await esbuild.build({
        plugins: denoPlugins(),
        entryPoints: [
            { out: 'index', in: './src/main.tsx' }
        ],
        outdir,
        bundle: true,
        format: "esm",
        jsx: "automatic",
        jsxImportSource: "preact",
        sourcemap: !release,
        minify: release
    });
    esbuild.stop();
};

if (import.meta.main) {
    switch (Deno.args[0]) {
        case 'static': {
            await copy('static', outdir, { overwrite: true });
            break;
        }
        case 'uno': {
            await uno.output();
            break;
        }
        case 'build': {
            await esb();
            await tail.output();
            break;
        }
        case 'release': {
            await emptyDir(outdir)
            await copy('static', outdir, { overwrite: true });
            await esb(true);
            await tail.output();
            break;
        }
        case 'start': {
            await serve.output();
        }
    }

}