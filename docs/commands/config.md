---
sidebar_label: 'config'
sidebar_position: 0
---

# gq config

`gq config <NAME> <VALUE>`

## Description

Set options. The name is actually the section and the key separated by a dot.

## Options

| NAME | VALUE | Description |
| - | - | - |
| `commit.conventional` | Bool | Enable [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Default is `false`. |
| `commit.types` | Comma separated types | Types for conventional commits. Default is `build, ci, docs, feat, fix, perf, refactor, style, test, revert`. |
| `commit.ticket` | Bool | Enable ticket number integration. Default is `false`. |

## Examples
### Conventional commits

You can enable [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) by running:
```
gq config commit.conventional true
```
This setting will make `GitQuick` ask for a commit type every time you use `gq commit`. The default types can be changed by running:
```
gq config commit.types a,b,c
```
This would change the default types to `"a","b","c"`.

### Ticket integration

If you want your commits to reference a ticket based on the brach name, run:
```
gq config commit.ticket true
```
This setting will append ticket number inside parentheses to the end of your commits while using `gq commit`.

Using `gq commit` to create `docs: add readme file` commit message on `feature/TEST-123-demo-setup` branch will result in the following message: 
```
docs: add readme file

Refs: TEST-123
``` 
