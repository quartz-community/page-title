# @quartz-community/page-title

Renders the site-wide page title (the `pageTitle` field in `quartz.config.yaml`) as a link to the home page.

## Installation

```bash
npx quartz plugin add @quartz-community/page-title
```

The page title is already in Quartz's default configuration.

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: "@quartz-community/page-title"
    enabled: true
    layout:
      position: left
      priority: 10
```

## Configuration

This plugin has no configuration options. The displayed title is controlled by the `pageTitle` field in `quartz.config.yaml`.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/PageTitle) for more information.

## License

MIT
