/**
 * Apple API global variables
 */
var APPLE_KEY = '4291af049e7b51ff411bc39565109ce6';
var APPLE_SECRET = '08d3df2f4f1d7f62';


/**
 * COPY AND PASTE this skeleton function when you make a new Apple API
 * DO NOT fill in the blanks for this skeleton
 *
 * @constructor - You are basically creating a object
 *
 *   Example to create an object with these properties, type:
 *   var my_apple_api_skeleton = new AppleAPI_Skeleton();
 */
function AppleAPI_Skeleton()
{
    /**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = '';



    /**
     * Enter the data object properties below.
     * These are the key/value parameters you pass like in Postman.
     * @type - object
     */
    this.api_data = {};


    /**
     * api_success
     * Enter the stuff you want to do when the API returns a successful response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_success = function(result)
    {

    };


    /**
     * api_error
     * Enter the stuff you want to do when the API returns a failed response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_error = function(result)
    {

    };


    /**
     * Add your own helper functions below.
     */
}


/**
 * AppleAPI_GetTopMovies
 * @constructor - gets the top 10 movies
 */
function AppleAPI_GetTopMovies()
{
    /**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';



    /**
     * Enter the data object properties below.
     * These are the key/value parameters you pass like in Postman.
     * @type - object
     */
    this.api_data = {};


    /**
     * api_success
     * Enter the stuff you want to do when the API returns a successful response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_success = function(result)
    {
        $('#main').html('');  // Clears out the inner HTML for the #main div.
        //this.layout_array[0](result);
        this.selected_layout_function(result);
    };


    /**
     * api_error
     * Enter the stuff you want to do when the API returns a failed response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_error = function(result)
    {

    };



    /**
     * Add your own helper functions and other data below.
     */
    this.listMoviesWithDirector = function(result)
    {
        console.log('AJAX Success function called, with the following result:', result);

        // Feature Set #2
        var movie_info = result.feed.entry[0];

        // Feature Set #3
        var movie_entries = result.feed.entry;
        for (var i = 0; i < movie_entries.length; i++)
        {
            var new_image = $('<img>').attr('src', movie_entries[i]["im:image"][2]['label']);

            // Feature Set #4
            var name = $('<p>').text(movie_entries[i]["im:name"]["label"]);
            var director = $('<p>').text('Directed by: ' + movie_entries[i]["im:artist"]["label"]);
            var movie_span = $('<div>').append(new_image, name, director, $('<hr>'));

            $('#main').append(movie_span);
        }
    };

    this.listMoviesSideBySide = function(result)
    {
        console.log('AJAX Success function called, with the following result:', result);

        // Feature Set #2
        var movie_info = result.feed.entry[0];

        // Feature Set #3
        var movie_entries = result.feed.entry;
        for (var i = 0; i < movie_entries.length; i++)
        {
            var new_image = $('<img>').attr('src', movie_entries[i]["im:image"][2]['label']);

            var movie_span = $('<span>').append(new_image);

            $('#main').append(movie_span);
        }
    };

    /**
     * These variables an methods are used to selecting the success function
     *  for this API object.
     * @type {null}
     */
    // This is the variable that will hold the function we use in the success function.
    this.selected_layout_function = null;
    // This is the object (key/value array) holding the function names we created above.
    this.layouts_object =
        {
            list: this.listMoviesWithDirector,
            'side-by-side': this.listMoviesSideBySide
        };
    // This is the function we're using for the radio buttons when one of them is clicked.
    this.selectLayout = function(layout_name)
    {
        this.selected_layout_function = this.layouts_object[layout_name];
    };
}