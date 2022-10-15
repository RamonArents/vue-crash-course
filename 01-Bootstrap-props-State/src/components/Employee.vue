<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3">Employee</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        Name : {{ this.employee.name }}
                    </li>
                    <li class="list-group-item">
                        Age : {{ this.employee.age }}
                    </li>
                    <li class="list-group-item">
                        Designation : {{ this.employee.designation }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: "Employee",
    data : function(){
        return {
            employee : {
                name : 'Ramon',
                age : 26,
                designation : 'Application Programmer'
            }
        }
    },
    props : {
        
    }
  };
  </script>
  
  <style scoped>

  </style>
  