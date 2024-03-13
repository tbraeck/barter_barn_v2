# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
require 'bcrypt'

puts "🥷👩‍🦰 Seeding users..."

 User.create!([
    {
      username: "Tate",
      password: "iscool",
      password_confirmation: "iscool"
    },
    {
      username: Faker::Name.name,
      password: "iscool",
      password_confirmation: "iscool"
    },
    {
      username: Faker::Name.name,
      password: "iscool",
      password_confirmation: "iscool"
    },
    {
      username: Faker::Name.name,
      password: "iscool",
      password_confirmation: "iscool"
    },
    {
      username: Faker::Name.name,
      password: "iscool",
      password_confirmation: "iscool"
    },
    {
      username: Faker::Name.name,
      password: "iscool",
      password_confirmation: "iscool"
    },
    {
      username: Faker::Name.name,
      password: "iscool",
      password_confirmation: "iscool"
    },
    {
      username: Faker::Name.name,
      password: "iscool",
      password_confirmation: "iscool"
    }
 ])
  

# puts "🥷👩‍🦰 Seeding forum categories..."

# Forum.create!([
#   { title: "Goods to Trade" },
#   { title: "Services to Trade" },
#   { title: "Free Stuff" }
# ])

puts "🤖 Seeding Goods..."

Good.create!([
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 1,
      
      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 2,
      
      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 3,
     
      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 4,
     
      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 5,
     
      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 6
      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 7,

      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 8,
      },
      {
        name: Faker::House.furniture,
        description: Faker::Lorem.paragraphs(number: 3).join("\n\n"),
        good_or_service: Faker::Construction.trade,
        user_id: 1,

      }
])

Good.all.each do |good|
  image_file_path = Rails.root.join('db/images/calavera.png')
  image = File.open(image_file_path)
  good.main_image.attach(io: image, filename: 'calavera.png')
end

puts "🤖 Seeding Services..."

  Service.create!([
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 7,
      
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 8,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 1,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 8,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 7,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 6,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 5,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 4,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 3,
    },
    {
        name: Faker::Hobby.activity,
      description: Faker::Job.key_skill,
      good_or_service: Faker::Appliance.equipment,
      user_id: 2,
    }
  ])

  Service.all.each do |service|
    image_file_path = Rails.root.join('db/images/barterBarn.png')
    image = File.open(image_file_path)
    service.main_image.attach(io: image, filename: 'barterBarn.png')
  end


puts "🤖 Seeding Free Stuff..."


Free.create!([
    {
        name: Faker::Hobby.activity,
      description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 3,
    },
    {
        name: Faker::Hobby.activity,
        description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 2,
        },
    {
        name: Faker::Hobby.activity,    
    description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 4
        },
    {
        name: Faker::Hobby.activity,
        description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 1,
    },
    {
        name: Faker::House.furniture,
        description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 1,
    },
    {
        name: Faker::House.furniture,
        description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 4,
    },
    {
        name: Faker::House.furniture,
        description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 5,
    },
    {
        name: Faker::House.furniture,
        description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 6,
    },
    {
        name: Faker::House.furniture,
        description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 7,
    },
    {
       
    name: Faker::House.furniture,
    description: Faker::Appliance.equipment,
      claimant_id: nil,
      user_id: 8,
    }
  ])

  Free.all.each do |free|
    image_file_path = Rails.root.join('db/images/fire.jpeg')
    image = File.open(image_file_path)
    free.main_image.attach(io: image, filename: 'fire.jpeg')
  end

  puts "🤖 Seeding Community Stuff..."


Community.create!([
    {
        name: Faker::Hobby.activity,
      description: Faker::Appliance.equipment,
      event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      user_id: 3,
    },
    {
      name: Faker::Hobby.activity,
    description: Faker::Appliance.equipment,
    event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
    user_id: 6,
  },
  {
    name: Faker::Hobby.activity,
  description: Faker::Appliance.equipment,
  event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
  user_id: 4,
},
{
  name: Faker::Hobby.activity,
description: Faker::Appliance.equipment,
event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
user_id: 5,
},
{
  name: Faker::Hobby.activity,
description: Faker::Appliance.equipment,
event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
user_id: 1,
},
{
  name: Faker::Hobby.activity,
description: Faker::Appliance.equipment,
event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
user_id: 1,
},
{
  name: Faker::Hobby.activity,
description: Faker::Appliance.equipment,
event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
user_id: 2,
},
{
  name: Faker::Hobby.activity,
description: Faker::Appliance.equipment,
event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
user_id: 3,
},
{
  name: Faker::Hobby.activity,
description: Faker::Appliance.equipment,
event_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
user_id: 8,
},



  ])

  Community.all.each do |comm|
    image_file_path = Rails.root.join('db/images/fire.jpeg')
    image = File.open(image_file_path)
    comm.main_image.attach(io: image, filename: 'fire.jpeg')
  end
  # FreeStuff.all.each do |free_stuff|
  #   image_file_path = Rails.root.join('db/images/calavera.png')
  #   image = File.open(image_file_path)
  #   free_stuff.main_image.attach(io: image, filename: 'calavera.png')
  # end
  # puts "🤖 Seeding Messages..."

  # Message.create!([
  #   {
  #   sender_id: 2,
  #   recipient_id: 1,
  #   content: Faker::Quote.jack_handey
  #   },
  #   {
  #     sender_id: 3,
  #     recipient_id: 6,
  #     content: Faker::Quote.jack_handey
  #     },
  #     {
  #       sender_id: 8,
  #       recipient_id: 7,
  #       content: Faker::Quote.jack_handey
  #       },
  #       {
  #         sender_id: 6,
  #         recipient_id: 5,
  #         content: Faker::Quote.jack_handey
  #         },
  #         {
  #           sender_id: 4,
  #           recipient_id: 3,
  #           content: Faker::Quote.jack_handey
  #           },
  #           {
  #             sender_id: 1,
  #             recipient_id: 2,
  #             content: Faker::Quote.jack_handey
  #           }
  #           ])
