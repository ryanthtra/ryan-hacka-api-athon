// This is the primary file, where we capture the document load
$(document).ready(function()
{
    /**
     * Add initial button event delegation handlers here.
     */
    $('#apple-div').on('click', 'button', function()
    {
        var apple_api_top_movies = new AppleAPI_GetTopMovies();
        makeAjaxGetJsonCall(apple_api_top_movies);
    });
});