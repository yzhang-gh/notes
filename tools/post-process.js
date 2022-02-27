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
                // https://css-tricks.com/fighting-the-space-between-inline-block-elements/
                const processed = content.replace(pat, '</svg><!--\n--><span class="sr-only">(opens new window)</span>');
                fs.writeFile(file, processed, (_err) => {});
            }
        });
    });
});
