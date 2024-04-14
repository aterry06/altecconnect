
import MeetingTypeList from '@/components/MeetingTypeList';
import moment from 'moment';
import 'moment-timezone';

const Home = () => {
  // Set the default timezone to America/Belize
  moment.tz.setDefault('America/Belize');

  const time = moment().format('h:mm A');
  const date = moment().format('MMMM Do, YYYY');
 

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[600px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting : View scheduled meetings on the Upcoming Page
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
