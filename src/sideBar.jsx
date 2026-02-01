import BasicDateCalendar from './calendar'
import BasicModal from './emailModal';

function Sidebar() {
  return (
    <div id="sidebar">
      <BasicDateCalendar />
      <BasicModal/>
    </div>
  );
}

export default Sidebar; // Fixed the casing
