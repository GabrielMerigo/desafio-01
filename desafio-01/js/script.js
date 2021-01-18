$(document).ready(function(){
//Variables
var uf = $('#uf');
var city = $('#city')
var address = $('#address');
var neighborhood = $('#neighborhood');
var btn = $('#btn');

//Verification and Console.log
btn.click(function(){
  let name = $('#name').val();
  let data = $('#data').val();
  let cpf = $('#cpf').val();
  let phone = $('#phone').val();
  let email = $('#E-mail').val();
  let cep = $('#cep').val();
  let address = $('#address').val();
  let neighborhood = $('#neighborhood').val();
  let number = $('#number').val();
  let complement = $('#complement').val();
  let city = $('#city').val();
  let uf = $('#uf').val();
  let description = $('#description').val();

  if(!name || !data || !cpf ||!phone ||!email){
    alert(`Por favor preenchas os campos.`);
  }else if(!cep || !address || !neighborhood || !number || !complement){
    alert(`Por favor preenchas os campos.`);
  }else if(!city || !uf || !description){
    alert(`Por favor preenchas os campos.`);
  }else{
    console.log(
      {
        nome: name,
        data: data,
        cpf: cpf,
        telefone: phone,
        email: email,
        cep:cep,
        logradouro: address,
        bairro: neighborhood,
        número: number,
        complemento: complement,
        cidade: city,
        estado: uf,
        descricao: description
      }
    )
  }
  
})

// Masks
$('#data').mask('00/00/0000')
$('#phone').mask('00 00000-0000')
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');


$('#cep').focusout(function(){
  let numCep = $('#cep').val();
  let url = `https://viacep.com.br/ws/${numCep}/json/`;
    
  $.ajax({
    url: url,
    type: "get",
    dataType: "json",
    
    success:function(data){
        uf.val(data.uf);
        city.val(data.localidade);
        address.val(data.logradouro);
        neighborhood.val(data.bairro)
      }
      
    }) 
    
})
})