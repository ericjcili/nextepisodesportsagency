const { Athlete } = require('../models');

const athleteData = [
  {
    ath_name: 'Ryan Lochte',
    ath_desc: "U.S. Olympic Swimmer",
    ath_info: "Ryan Lochte has become a transcendent figure in the Olympic world. Ryan is a 12-time Olympic medalist (including six Gold, three Silver, and three Bronze). His seven individual Olympic medals are second all-time in Men’s Swimming and he is the current world record holder in the 200 individual medley. Ryan has been named both American and World Swimmer of the Year twice in his career (2010 & 2011) and has a total of 70 medals in major international competition including 45 first place finishes. As a Florida Gator, Ryan was a two-time NCAA Swimmer of the Year, 24-time NCAA All-American, and 7-time NCAA Champion. Ryan’s accomplishments in the pool along with his committed fan base have helped him gain pop culture status outside the pool. He has recently made cameos on episodes of 30 Rock and Beverly Hills 90210, as well as appearing on People’s 2012 ‘Sexiest Man Alive’ list. Ryan has a blue chip roster of corporate partnerships as he has become the face of international swimming.",
    pic_title: "ryanlochte",
    user_id: 1,
  },
  {
    ath_name: 'Michael Andrew',
    ath_desc: "U.S. Olympic Swimmer",
    ath_info: "His family lived in Aberdeen, South Dakota from 1997 to 2011, where Andrew started swimming at age 7 and competed for the Aberdeen Swim Club. Soon after, Andrew’s father decided he wanted to coach Andrew himself so his parents bought and converted a nightclub in Aberdeen into a four-lane pool so Andrew could train with Peter as coach, then purchased the building next door and made it into their home. The family moved to Lawrence, Kansas in 2011. As the house in Lawrence did not come with a pool, they built a shed and a two-lane training pool in the backyard where Andrew was coached by his father. In 2013, Andrew turned professional at the age of 14 and became the youngest American swimmer to do so. As a junior swimmer he broke more than 100 National Age Group records (long course meters and short course yards combined), more than any other American swimmer. Part of Andrew’s coaching by his father during his youth included training in a non-traditional way, using a method called Ultra Short Race Pace Training (USRPT), he has continued to train with this approach into adulthood.",
    pic_title: "michaelandrew",
    user_id: 1,
  },
  {
    ath_name: 'Kelsi Dahlia',
    ath_desc: "U.S. Olympic Swimmer",
    ath_info: "Kelsi Worrell Dahlia has become the butterfly icon of USA Swimming in the last five years. She qualified for the 2016 Rio Olympics in the 100-meter butterfly and won a gold medal in the 4 x 100-meter medley relay. At the NCAA finals in March 2015, she broke the 13-year-old record held by twelve-time Olympic medalist Natalie Coughlin, and became the first woman to break 50 seconds in the event. In March 2016, she improved her record again. As a Louisville Cardinal, Kelsi received in her senior year the Honda Cup as the best female athlete across all collegiate sports.",
    pic_title: "kelsidahlia",
    user_id: 1,
  },
  {
    ath_name: 'Zach Harting',
    ath_desc: "U.S. Olympic Swimmer",
    ath_info: "Zach Harting is an American competitive swimmer who specializes in the butterfly and freestyle events. He currently represents the DC Trident which is part of the International Swimming League. He competed in the men’s 200 metre butterfly at the 2019 World Aquatics Championships. In 2021, he qualified for the 2020 Summer Olympics in the 200m Butterfly. Zach Harting was born August 27, 1997 in Madison, Alabama, as the son of Scott and Lori Harting. Harting attended Bob Jones High School and swam for the Huntsville Swim Association. In 2014, he was the High School State Champion in the 100-yard butterfly. Harting swam collegiately at the University of Louisville from 2015 to 2019.",
    pic_title: "zachharting",
    user_id: 1,
  },
]

const seedAthletes = () => Athlete.bulkCreate(athleteData);

module.exports = seedAthletes;