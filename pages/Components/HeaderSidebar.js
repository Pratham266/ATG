import React from 'react';
import Card from './Card';
import Card2 from './Card2';

const HeaderSidebar = () => {
  return (
    <div className="col-span-12 sm:col-span-8">
    {/* <!-- Main Content --> */}
    <Card
      message="What is a famous brands had regular fonts? Meet RegulaBrand! Thank You"
      imagePath="/1.png"
      logo="/pen.png"
      title="Article"
      people="/p1.png"
    />
    <Card2
      message="Text Benifits for Investment under National Pension Schemae lanuched by Goverment"
      imagePath="/2.png"
      logo="/micro.png"
      title="Eduction"
      people="/p2.png"
    />
    <Card
      message="Success is not the key to happiness. Happiness is the key to success."
      imagePath="/3.png"
      logo="/job.png"
      title="Job"
      people="/p3.png"
    />
    <Card2
      message="Meetups are not just about networking; they are about creating meaningful connections."
      imagePath="/2.png"
      logo="/meet.png"
      title="MeetUp"
      people="/p4.png"
    />
  </div>
  )
}

export default HeaderSidebar
