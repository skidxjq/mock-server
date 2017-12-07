# Mock Server

## what is it ?
a simple mock server built on express, totally based on file system and dynamic reload

## how to use
```sh
git clone https://github.com/skidxjq/mock-server
cd mock-server && npm install
npm run mock
```

## examples

### demo1
if you want to create a API named '/mock/demo/one', you should create a folder totally the same with API except for  replacing '/' with '-',
then you could create an ***index.js*** file in this folder, and make your mock data as default export.
```sh
cd data && mkdir mock-demo-one
touch index.js
echo 'module.exports = ${your_data}' > index.js
```
file conent in data/mock-demo-one/index.js
```js
module.exports = {
  "code": 0,
  "msg": "success",
  "data": {
    "name": "skidxjq",
    "age": 18
  }
}
```
### demo2
if you want to create a API named '/mock/demo/two', serveral alternatives of mock data are prepared, you may switch one to another, just shown as image below.

how to do it 
```sh
cd data && mkdir mock-demo-two

```


### demo3
make a response based on the request parameters, such as check ```req.body``` or validate your parameters submitted from a html form
how to do it 


## Advantages
- Do not need to restart your server, our core principle is url pattern matching, and make it like a express router
- custom your own response based on request  parameters
- dynamicly switch one data to another on dashboard

## Cautions
- There are no ways to nest your APIs, you should relate  one ***api folder***  to  the specified  ***api name*** .
