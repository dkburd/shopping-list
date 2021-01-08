// check button 
$(function(){
  $('ul').on('click', 'button.shopping-item-toggle', function(event){
    $(this).parent().siblings().toggleClass("shopping-item__checked");
    });
});


//delete button 
$(function() {
  $('ul').on('click', 'button.shopping-item-delete', function(event) {
    $(this).parent().parent().remove();
  });
});

// add item button 
$(function() {
  $("#js-shopping-list-form").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
// new variable containing the user input
const newItem = $(event.currentTarget).find('#shopping-list-entry');
//add an li to the end of the ul with all the parts of the original lis
        $("ul").append(
      "<li>" +
      "<span class='shopping-item'>" + newItem.val() + "</span>" +
      "<div class='shopping-item-controls'>"+
          "<button class='shopping-item-toggle'>"+
            "<span class='button-label'>check</span>"+
          "</button>"+
         "<button class='shopping-item-delete'>"+
            "<span class='button-label'>delete</span>"+
          "</button>"+
       "</div>"+
      "</li>"
    );
  });  
})



// this will not work for added li's becasue of EVENT DELEGATION
// need to target the the buttons with this class within ul becasue ul there at begining
// check button 
// $(function(){
//   $("button.shopping-item-toggle").click(function(){
//     $(this).parent().siblings().toggleClass("shopping-item__checked");
//     });
// });
