'use strict';

module.exports = {
  write: true,
  prefix: '^',
  test: [
    'test',
    'benchmark',
  ],
  dep: [
    'egg',
    'egg-lru',
    'taobao-parser'
  ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'autod',
    'eslint',
    'eslint-config-egg',
    'supertest',
    'webstorm-disable-index',
    'cross-env'
  ],
  exclude: [
    './test/fixtures',
    './dist',
  ],
};

