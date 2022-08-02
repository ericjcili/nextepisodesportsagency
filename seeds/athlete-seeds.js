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
  //
  {
    ath_name: 'Freddie Swain',
    ath_desc: "Wide Receiver, Seattle Seahawks",
    ath_info: "Freddie Swain (born August 4, 1998) is an American football wide receiver for the Seattle Seahawks of the National Football League (NFL). He played college football for the Florida Gators. Early years Swain attended North Marion High School, where he was a consensus four-star recruit and fielded scholarship offers from Alabama and Clemson before selecting Florida. As a return specialist, Swain returned 22 punts for 224 yards in 2018, including an 85-yard return for a touchdown. In 2019, he compiled 14 returns for 56 yards. Swain tallied 38 catches for 527 yards and a team-high seven touchdowns as a senior. In 47 career games, including 10 starts, Swain gained 1,387 all-purpose yards. He had 69 career receptions for 996 yards and 15 touchdowns.",
    pic_title: "freddieswain",
    user_id: 1,
  },
  {
    ath_name: 'CeCe Jefferson',
    ath_desc: "Defensive Lineman, Outside Linebacker, University of Florida",
    ath_info: "2017: Played in all 11 games and recorded eight starts at defensive end… Totaled 47 tackles, which ranked fourth on the team…Led the team in tackles-for-loss (13.5 for 38 yards) and sacks (4.5 for 14 yards)… Totaled a career-best nine tackles against Florida State (Nov. 25)… Earned SEC Defensive Player of the Week honors after he registered a career-best 1.5 sacks against Kentucky… Also recorded one pass breakup and six quarterback hurries, which ranked second on the team… 2016: Played in 12 games and started six… Missed Florida’s South Carolina due to an injury… Totaled 30 tackles, 6.5 tackles-for-loss, 1.5 sacks and five quarterback hurries… Notched a season-high five tackles and two quarterback hurries against Missouri… Recorded three solo tackles, including one tackle-for-loss against Iowa in the Outback Bowl… 2015: Appeared in all 14 games, starting in four of them… Named to the SEC Coaches All-Freshman team…Named to the PFF All-Freshman Second Team…Tied for third on the team with 3.5 sacks.",
    pic_title: "cecejefferson",
    user_id: 1,
  },
  {
    ath_name: 'Martez Ivey',
    ath_desc: "Offensive Lineman, University of Florida",
    ath_info: "2017: Played and started in all 11 games… Started the first nine games at left tackle and the final two contests of the season at left guard… He and Jawaan Taylor were the only two Florida offensive linemen to start each game… Named Second Team All-SEC by the league’s Coaches and the Associated Press… Garnered Third Team All-SEC honors by Phil Steele… 2016: Played in 13 games and made 12 starts… Had recorded 19 straight starts at left guard prior to the SEC Championship Game against Alabama… Two-time SEC Offensive Lineman of the Week (UGA, South Carolina)… Named Second Team All-SEC by the league’s Coaches and the Associated Press… Garnered Third Team All-SEC honors by Athlon Sports… 2015: Played in 12 games, starting in the last eight at left guard…Also saw time as a backup at tackle… Named to the SEC Coaches All-Freshman team.",
    pic_title: "martezivey",
    user_id: 1,
  },
  {
    ath_name: 'Matt Jones',
    ath_desc: "Running Back, Indianapolis Colts",
    ath_info: "Matt Jones is an American football running back that plays in the NFL for the Washington Redskins. He was drafted in the 3rd round of the 2015 draft. Prior to the NFL, Matt played college football at the University of Florida. As a freshman in 2012, he appeared in 12 games where he rushed for 275 yards on 52 carries with 3 touchdowns. In 2013 as a sophomore, Matt played in only 5 games due to a torn meniscus. Despite his injury, he finished the year with 339 yards on 79 carries with 2 touchdowns. Prior to his junior season, Matt was named preseason 3rd-team All-SEC by his coaches. During that 2014 year, he rushed for 817 yards on 166 carries and 6 touchdowns.",
    pic_title: "mattjones",
    user_id: 1,
  },
]

const seedAthletes = () => Athlete.bulkCreate(athleteData);

module.exports = seedAthletes;