/**
 * It turns out that this script doesn't work.
 * (There is always a space (text-node) between <svg> and <span class="sr-only">
 *  even there is no line space in the source code at all)
 * 
 * Use `display: inline-block` instead
 * https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace
 */

const fs = require("fs");
const glob = require("glob")

const pat = /<\/svg> <span class="sr-only">\(opens new window\)<\/span>/g

glob("docs/.vuepress/dist/**/*.html", (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        fs.readFile(file, (err, data) => {
            if (err) {
                console.error(err);
            }

            content = data.toString();

            if (pat.test(content)) {
                const processed = content.replace(pat, '</svg>');
                fs.writeFile(file, processed, (_err) => {});
            }
        });
    });
});
