<template>
  <div>
   <div>列表渲染</div> 
   <ul>
     <li v-for= "(item,index ) in items " :key=index>{{index}}{{item.message}}</li>
     <li v-for = "(value,key) in obj" :key=key>{{key}}:{{value}}</li>
     <!-- <input v-model="message" placeholder="edit me" >
      <p>{{message}}</p> -->
      <input v-model.lazy="message" placeholder="edit me" :key=98779>
      <p>Message is: {{ message }}</p>
      <span>Multiline message is :</span>
      <p style="whilte-spave:pre-line;">{{message}}</p>
      <br>
      <textarea v-model="message" placeholder="multiple lines"></textarea>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checked">{{checked}}</label>
   </ul>
   <div id='example-3'>
     <input type="checkbox" id='jack' value='Jack' v-model="checkedNames">
     <label for="jack">Jack</label>
     <input type="checkbox" id='john' value='john' v-model="checkedNames">
     <label for="john">john</label>
     <input type="checkbox" id='mike' value='mike' v-model="checkedNames">
     <label for="mike">Mike</label>
     <br>
     <span>checked names: {{checkedNames}}</span>
   </div>
   <div id='example-4'>
     <input type="radio" id='one' value="One" v-model='picked'>
     <label for="one">One</label>
     <br>
     <input type="radio" id='two' value='Two' v-model='picked'>
     <label for="two">Two</label>
     <br>
     <span>Picked: {{picked}}</span>
   </div>
   <div class='example-5'>
     <select v-model="selected">
       <option disabled value="">请选择</option>
       <option >A</option>
       <option >B</option>
       <option >C</option>
     </select>
     <span>Selected: {{selected}}</span>
   </div>
   <div id='example-6'>
     <select v-model="selected1" multiple style = "width :50px;">
       <option>A</option>
       <option>B</option>
       <option>C</option>
     </select>
     <br>
     <span>Selected: {{selected1}}</span>
   </div>
   <!-- 用v-for动态渲染 -->
   <select v-model="selected">
     <option v-for="option in options" v-bind:value="option.value" >
       {{option.text}}
     </option>
   </select>
   <span>Selected: {{selected}}</span>
   <!-- 值绑定 -->
   <!-- 对于单选按钮，复选框及选择框的选项，v-model绑定的值通常是静态字符串 -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {message: 'Foo'},
        {message: 'bar'}
      ],
      obj:{
        name:'du',
        age:25
      },
      message:'',
      checked: '',
      checkedNames:[],
      picked:'',
      selected:'A',
      selected1:[],
      options:[
        {text: 'one',value: 'A'},
        {text: 'Two',value: 'B'},
        {text: 'Three', value: 'c'}
      ]
    }
  }
}
</script>
