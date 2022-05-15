import { Box, Button, Center, Container, HStack } from "native-base";
import React, { useState } from "react";
import AllBookings from "./AllBookings";
import ChangeSlots from "./ChangeSlots";

const AdminDashboard = () => {
  const [active, setActive] = useState(0);
  return (
    <Center>
      <HStack space={2} justifyContent="center" mt="20">
        <Box>
          <Button onPress={() => setActive(0)}>All Bookings</Button>
        </Box>
        <Box>
          <Button onPress={() => setActive(1)}>Edit Slots</Button>
        </Box>
      </HStack>
      {active === 0 && <AllBookings />}
      {active === 1 && <ChangeSlots />}
    </Center>
  );
};

export default AdminDashboard;
