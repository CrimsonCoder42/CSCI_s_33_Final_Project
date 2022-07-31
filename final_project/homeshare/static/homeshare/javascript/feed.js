document.addEventListener('DOMContentLoaded', function () {

  const homeFeed = document.querySelector('#home_feed_bttn').addEventListener('click', () => home_feed() );
  const yourProfile = document.querySelector('#your_profile_bttn').addEventListener( 'click', () => your_profile() );
  const following = document.querySelector('#following_bttn').addEventListener( 'click', () => youFollowing() );
  const wishList = document.querySelector('#wish_list_bttn').addEventListener( 'click', () => yourWishList() );
  const chat = document.querySelector('#chat_bttn').addEventListener( 'click', () => chatMessaging() );

  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
  document.querySelector('#property_listing').style.display = 'none';

  home_feed()

});

// All visials separated out.

function home_feed(){
  document.querySelector('#home_feed').style.display = 'block';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
  document.querySelector('#property_listing').style.display = 'none';

}

function your_profile(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'block';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
  document.querySelector('#property_listing').style.display = 'none';

}

function youFollowing(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'block';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
  document.querySelector('#property_listing').style.display = 'none';

}

function yourWishList(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'block';
  document.querySelector('#chat').style.display = 'none';
  document.querySelector('#property_listing').style.display = 'none';

}

function chatMessaging(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'block';
  document.querySelector('#property_listing').style.display = 'none';

}

function propertyListing(){
  document.querySelector('#home_feed').style.display = 'none';
  document.querySelector('#your_profile').style.display = 'none';
  document.querySelector('#following').style.display = 'none';
  document.querySelector('#wish_list').style.display = 'none';
  document.querySelector('#chat').style.display = 'none';
  document.querySelector('#property_listing').style.display = 'block';

}