$(document).ready(function(){
			
	$('input#keyword').focus(function(){
	
		$('#feed').html(''); //clears results when typing new keyword(s).
		
	});
	
	$('button#search').click(function(){
	
		var keyw = $('input#keyword').val(); //retrieves keyword(s) typed.
						
		$.getJSON('http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+keyw+'&jsoncallback=?',function(data){ //display JSON feed using keyword(s) typed
		
			console.log(data); //see if results came in...
		
			$.each(data.photos.photo, function(i,photo){
			
        		content = '<a href="http://www.flickr.com/photos/'+photo.owner+'/" target="_blank"><img src="http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg"></a>';
        		
        		$(content).appendTo("#feed"); //displays each result inside feed div above.
        		        		
			});
		});   
	});	
		
});

/*

API url: 

http://www.flickr.com/services/api/request.rest.html

AJAX request URLwith tags=cat (search term = cat):

http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=cat&jsoncallback=?

JSON Snippet:

jsonFlickrApi({
    "photos": {
        "page": 1,
        "pages": 46641,
        "perpage": 100,
        "total": "4664056",
        "photo": [
            {
                "id": "7790251192",
                "owner": "80992738@N00",
                "secret": "50b0af1b38",
                "server": "8440",
                "farm": 9,
                "title": "Friends",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0
            },

object property path: 

photos.photo.farm
photos.photo.server
photos.photo.id
photos.photo.secret

info about creating photo url from son data: http://www.flickr.com/services/api/misc.urls.html

http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

Example Test:

http://farm9.staticflickr.com/8440/7790251192_50b0af1b38.jpg

*/