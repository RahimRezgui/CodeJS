async function check_login(){
  if(localStorage.getItem("user_access_key") === null){
    window.location.href = `${window.location.origin}/log_in`;
    return
  }else {
    const email = localStorage.email;
    const user_access_key = localStorage.user_access_key;

    try{
      const formData = {
        email,
        user_access_key,
      }
      const response = await fetch(`${window.location.origin}/verify_credentials`, {
        method: 'post',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const response_data = await response;
      const data = await response.json();
      console.log(response_data.status)
      console.log(data)
      if (response_data.status === 200){
        document.getElementById('email_input').value = email;
        document.getElementById('user_access_key_input').value = user_access_key;
        document.getElementById('submit_user_login').click();
        //log_in_user();
      }else {
        return
      }
    }catch(error){
        console.log(error)
    }finally{

    }
  }
}

function hide_cookies(){
  let cookies_el = document.getElementById('cookies_section');
  cookies_el.classList.remove('fadein');
  cookies_el.classList.add('fadeout');
  //cookies_el.remove()
  localStorage.setItem('cookies_consent', true);
}

window.onload = function() {
  populate_fields();
  if(localStorage.getItem('cookies_consent') !== 'true'){
    document.getElementById('cookies_section').classList.add('fadein');
  }
};

function populate_fields(){
  const email = localStorage.getItem('email');
  const fields = document.querySelectorAll('.email');

  if(email === null || email === undefined || email == ''){
    return
  }else{
    fields.forEach(field=>{
      field.value = email;
    })
  }
}

function get_product_1(){
  window.location.href = '/editor'
}

/*window.onload = function set_cookies_banner(){
  if(localStorage.getItem('cookies_consent') == 'true'){
    hide_cookies()
  }
  hide_cookies()
  console.log('fireing')
}*/
