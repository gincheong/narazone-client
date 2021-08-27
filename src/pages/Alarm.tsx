// layouts
import MainLayout from "../layouts/MainLayout";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
// components
import AlarmDropdown from "../components/DropdownMenu/AlarmDropdown";

const Alarm = () => {
  return (
    <MainLayout title={"narazone 개찰알림"}>
      <DropdownMenu title={"Print (알림 설정)"}>
        <AlarmDropdown />
      </DropdownMenu>
      모니터링 현황 출력
    </MainLayout>
  )
};

export default Alarm;