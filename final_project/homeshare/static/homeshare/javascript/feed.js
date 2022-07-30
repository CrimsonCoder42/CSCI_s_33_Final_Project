document.addEventListener('DOMContentLoaded', function () {

  const homeFeed = document.querySelector('#login-button');
  const yourProfile = document.querySelector('#register-button');
  const following = document.querySelector('#login-button');
  const wishList = document.querySelector('#register-button');
  const chat = document.querySelector('#login-button');


  youFollowing()

});

function home_feed(){
  document.querySelector('#home_feed').style.display = 'block';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
}

function your_profile(){
 document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'block';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
}

function youFollowing(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'block';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
}

function wishList(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'block';
  document.querySelector('#chat').style.display = 'none';
}

function chat(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'block';
}