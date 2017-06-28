// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1Wqgie_iHj8UTGNjWjhV0S3pvU_mjPZY",
    authDomain: "produce-dba41.firebaseapp.com",
    databaseURL: "https://produce-dba41.firebaseio.com",
    projectId: "produce-dba41",
    storageBucket: "",
    messagingSenderId: "802255195742"
  };
  firebase.initializeApp(config);

  var messageAppReference = firebase.database();

  $(document).ready(function() {
      $('#message-form').submit(function(event) {
          event.preventDefault();
          var message = $('#message').val();
          $('#message').val('');
          var messagesReference = messageAppReference.ref('messages');
          messagesReference.push({
              message: message,
              votes: 0
          });
      });
      getPosts();
  });

  function getPosts() {
      messageAppReference.ref('messages').on('value', function(results) {
          var $messageBoard = $('.message-board');
          var messages = [];

          var allMsgs = results.val();

          for (var msg in allMsgs) {
              var message = allMsgs[msg].message;
              var votes = allMsgs[msg].votes;

              var $messageListElement = $('<li>');
            // create delete element
            var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');
            $deleteElement.on('click', function(e) {
                var id = $(e.target.parentNode).data('id');
                deleteMessage(id);
            });

            // create up vote element
            var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');
            $upVoteElement.on('click', function(e) {
                var id = $(e.target.parentNode).data('id');
                updateMessage(id, ++allMsgs[id].votes);
            });
    
            // create down vote element
            var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');
            $downVoteElement.on('click', function(e) {
                var id = $(e.target.parentNode).data('id');
                updateMessage(id, --allMsgs[id].votes);
            });

            $messageListElement.attr('data-id', msg);

            $messageListElement.html(message);
            $messageListElement.append($deleteElement);
            $messageListElement.append($upVoteElement);
            $messageListElement.append($downVoteElement);

            $messageListElement.append('<div class="pull-right">' + votes + '</div>');

            messages.push($messageListElement);       
        }
        $messageBoard.empty();
        for (var i in messages) {
            $messageBoard.append(messages[i]);
        }
        
      });
  }

  function updateMessage(id, votes) {
      var messageReference = messageAppReference.ref('messages').child(id);
      messageReference.update({
          votes: votes
      })
  }

  function deleteMessage(id) {
      var messageReference = messageAppReference.ref('messages').child(id);   
      messageReference.remove();
  }