# React-paginate
common react component for pagenate

***
```
This is my paginate component when I need page component , and did't want to use other's,beacause of that there are some differences we need,so I build this component.

This component can render different records,the boundary is 10,when total num <=10,component will render all page buttons ,and when total>10,when render 1,2,3...9,10,11.  if currentPage is between start and end ,it will render like this 1...4,5,6...100.
```
***

I did't publish it in npmjs,so you just copy it to your new file,import it to your components.

***

>This component needs 4 params


```
|----------------------------------------------------------------------|
|   param's name |  param's type   |  param's receive(func)            |
|----------------|-----------------|-----------------------------------|
|   goPage       |  func           |  currentPage({currentPage:val})   |
|----------------|-----------------|-----------------------------------|
|   currentPage  |  number         |                                   |
|----------------|-----------------|-----------------------------------|
|   total        |  number         |                                   |
|----------------|-----------------|-----------------------------------|
|   pageSize     |  number         |                                   |
|----------------------------------------------------------------------|
```

>you can use this component like this :

 ```
 <Paginate goPage={this.handlePage}
                            total={this.state.total}
                            currentPage={this.state.currentPage}
                            pageSize={this.state.pageSize}
                            />
 ```
  
  >handlePage is your handle function, total is the counts of records
  
  
***
>you can see the effect in http://www.anfubaoxian.com/product
