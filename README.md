# vuex-demo

### 根据vuex官方文档写的demo

### 当项目模块庞大的时候，数据如果只用单个store，不好维护，所以可以采取分模块划分store

### 如果在不同模块中store存在相同的mutation
##### 1.如果没有设置namespace属性，则都会触发执行
##### 2.设置namespace，则只会对应执行
