# Ask Me Baby

## Tanım

Başta MaviDurak IO ve tüm türk geliştiriciler için soru ve cevap platformu, stackOverFlow adlı mucize platformun türkçeleştirilmiş bi klonu. Kullanıcıların programlama dilleri ve teknolojiler hakkında çeşitli etiketlerle yeni sorular sorabileceği, sorulan sorulara cevaplar verip, verilen cevaplara yorum ve puan verebileceği bir uygulama.

Tüm kullanıcı girişleri GitHub API aracılığıyla GitHub hesapları üzerinden yapılacak. Kullanıcıların uygulama üzerinde sade birer profil sayfaları da bulunacak, bu profil sayfalarında cevaplarına göre aldıkları puanlar, profil fotoğrafı ve kendileri hakkında hazırladıkları kısa açıklamayla birlikte hakim olduğu teknolojilere ait tagler yer alacak, bu tagler soruların filtrelenmesini sağlamak üzere programlanacak.

# Back-End 

Programming Lang: Node JS
Application Framework: [Meteor.JS](https://www.meteor.com)
Database: MongoDB

## Installation

```
$ git clone https://github.com/mavidurak/askMeBaby.git
$ meteor
```

## Application Structure
  
    This app will not be SPA.
    
    #VIEWS

            Main View

                -Navbar
                    --Login, Register links

                -Ask New Question Button

                -Last Questions ordered by Last updated time property
                    --Short descriptions and relational tags under question headers

            Ask Question View

                -Suggest matched old questions to user
                    --List best matched 5 question ordered by answer count
                -Fields about question
                    --simple text editor allowing include code snippets


            Login & Register View

                -Create New askMeBaby account with Facebook
                    or if registered user
                -Login with Facebook API

            Question Content View

                -Question, description about problem by owner
                -Answers List with User Votes
                    --Comments
                -Add new answer field

            Simple User Profile View

                -User profile picture, username, about
                -Asked questions, answered questions and reputation points
                -if allowed social network accounts links

            Simple User Panel

                -Edit informations, email, username, password, profile picture and description etc.

Database Structure

            ##Collections

                #Users
                #Answers
                #Questions
                #Votes
                #Tags

                Users
                    username,
                    email,
                    password,
                    registeredAt,
                    lastLogin,
                    point,
                    description,
                    links
                        {
                            web: web,
                            github: github,
                            fb: fb,
                            tw: tw
                        },
                    state,
                    auth

                Questions
                    header,
                    description,
                    askedBy - > ref[User's Object ID],
                    askedAt,
                    tags: {

                    },
                    votes: {

                    },
                    lastUpdated

                Answers
                    question - > ref[Question's Object ID],
                    text,
                    createdBy -> ref[User's Object ID],
                    createdAt,
                    votes: {
                    },
                    comments: {
                        createdBy: -> ref[User's Object ID],
                        createdAt,
                        text
                    }

                Tags
                    name,
                    description


    RESTful Web Service

                Questions

                    PUT         /question               insert new question
                    POST        /question               update question data
                    GET         /questions/{:limit}     get limited count question ordered by lastUpdated property
                    GET         /question/{:id}         get single question with answers by id


                Answers

                    PUT         /answer                 insert new answer
                    POST        /answer                 update answer
                    GET         /answers/{:questionId}  get answers by question ordered by Date
                    GET         /answer/{:id}           get single answer by id
                    GET         /solve/{:questionId}    get id of validated answer by question owner

                Users

                    PUT         /register               insert new user
                    POST        /user                   update user fields
                    GET         /user/{:username}       get userdata by username
                    POST        /login                  check data, if true, create session
                    

                Votes

                    PUT         /vote                   add vote into relational object
                    POST        /vote                   delete vote from object array


  Uygulama geliştirme sürecinde bu dökümana güncellemeler yapılabilir.
