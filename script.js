$('#previewButton').click(function(){
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();
    
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);
    
    $('#flashMessage')
    .fadeIn(2000)
    .delay(3000)
    .slideUp();
  });