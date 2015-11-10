// This is the primary file, where we capture the document load
$(document).ready(function()
{
    /**
     * Add initial button event delegation handlers here.
     */
    var apple_api_top_movies = new AppleAPI_GetTopMovies();
    $('#apple-div').on('click', 'button', function()
    {
        // You could declare inside the click-handler, instead
        //var apple_api_top_movies = new AppleAPI_GetTopMovies();
        makeAjaxGetJsonCall(apple_api_top_movies);
    });
    // The radio button click-handler
    $('#apple-div').on('click', 'input[type=radio]', function()
    {
        apple_api_top_movies.selectLayout($(this).attr('value'));
    });
});