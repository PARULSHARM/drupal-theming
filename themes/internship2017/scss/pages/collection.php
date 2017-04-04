<?php
  class Test{

    public $name;

    public function hello(){
      echo "hello";
    }

    function __get($param){
      echo "$param does not exist"
    }
  }


$test = new test();
$test->hello();
$test->lastname;
?>
