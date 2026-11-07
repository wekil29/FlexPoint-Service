# FlexPoint Services

A static HTML, CSS, and JavaScript website for FlexPoint Services. GitHub Pages serves the files in this repository; the `CNAME` file keeps the custom domain configured.

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Service detail pages are under `pages/`.

## Site structure

- `index.html` — homepage and service overview
- `pages/` — tax preparation, bookkeeping, financial education, technology support, healthcare enrollment, immigration form assistance, and insurance availability
- `css/` and `js/` — shared responsive styles and navigation behavior
- `images/` — logo and site imagery

The site uses relative asset paths and has no build step or backend form submission.
