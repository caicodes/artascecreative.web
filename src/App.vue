<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="top"
    >
      <CHeading textAlign="center" mb="4">artascecreative</CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            @click="toggleColorMode"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
          />
          <CButton left-icon="info" variant-color="indigo" @click="showToast"
            >Show Toast</CButton
          >
        </CBox>

        <CStack :spacing="3" is-inline m="6">
          <CBox
            :bg="`palettes.${colorPalette}.primary-1`"
            width="6"
            height="6"
            p="6"
          />
          <CBox
            :bg="`palettes.${colorPalette}.primary-2`"
            width="6"
            height="6"
            p="6"
          />
          <CBox
            :bg="`palettes.${colorPalette}.primary-3`"
            width="6"
            height="6"
            p="6"
          />
          <CBox
            :bg="`palettes.${colorPalette}.primary-4`"
            width="6"
            height="6"
            p="6"
          />
        </CStack>

        <CButton
          variant="ghost"
          m="1"
          @click="changeColorPalette('rosettesCream')"
        >
          <CStack :spacing="1" is-inline m="3">
            <CBox
              bg="palettes.rosettesCream.primary-1"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.rosettesCream.primary-2"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.rosettesCream.primary-3"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.rosettesCream.primary-4"
              width="3"
              height="3"
              p="3"
            />
          </CStack>
        </CButton>

        <CButton variant="ghost" m="1" @click="changeColorPalette('cafeCrem')">
          <CStack :spacing="1" is-inline m="3">
            <CBox bg="palettes.cafeCrem.primary-1" width="3" height="3" p="3" />
            <CBox bg="palettes.cafeCrem.primary-2" width="3" height="3" p="3" />
            <CBox bg="palettes.cafeCrem.primary-3" width="3" height="3" p="3" />
            <CBox bg="palettes.cafeCrem.primary-4" width="3" height="3" p="3" />
          </CStack>
        </CButton>
        <CButton
          variant="ghost"
          m="1"
          @click="changeColorPalette('powderedGrape')"
        >
          <CStack :spacing="1" is-inline m="3">
            <CBox
              bg="palettes.powderedGrape.primary-1"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.powderedGrape.primary-2"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.powderedGrape.primary-3"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.powderedGrape.primary-4"
              width="3"
              height="3"
              p="3"
            />
          </CStack>
        </CButton>
        <CButton
          variant="ghost"
          m="1"
          @click="changeColorPalette('eveningOnTheBeach')"
        >
          <CStack :spacing="1" is-inline m="3">
            <CBox
              bg="palettes.eveningOnTheBeach.primary-1"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.eveningOnTheBeach.primary-2"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.eveningOnTheBeach.primary-3"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.eveningOnTheBeach.primary-4"
              width="3"
              height="3"
              p="3"
            />
          </CStack>
        </CButton>

        <CButton
          variant="ghost"
          m="1"
          @click="changeColorPalette('dietDrPepper')"
        >
          <CStack :spacing="1" is-inline m="3">
            <CBox
              bg="palettes.dietDrPepper.primary-1"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.dietDrPepper.primary-2"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.dietDrPepper.primary-3"
              width="3"
              height="3"
              p="3"
            />
            <CBox
              bg="palettes.dietDrPepper.primary-4"
              width="3"
              height="3"
              p="3"
            />
          </CStack>
        </CButton>

        <CButton
          left-icon="close"
          variant-color="red"
          mt="3"
          @click="showModal = true"
          >Delete Account</CButton
        >
        <CModal :is-open="showModal">
          <CModalOverlay />
          <CModalContent>
            <CModalHeader>Are you sure?</CModalHeader>
            <CModalBody>Deleting user cannot be undone</CModalBody>
            <CModalFooter>
              <CButton @click="showModal = false">Cancel</CButton>
              <CButton
                margin-left="3"
                variant-color="red"
                @click="showModal = false"
                >Delete User</CButton
              >
            </CModalFooter>
            <CModalCloseButton @click="showModal = false" />
          </CModalContent>
        </CModal>
      </CFlex>
    </CBox>
  </div>
</template>

<script>
export default {
  name: "App",
  inject: ["$chakraColorMode", "$toggleColorMode"],

  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: "gray.700",
          color: "whiteAlpha.900",
        },
        light: {
          bg: "white",
          color: "gray.900",
        },
      },
    };
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
    theme() {
      return this.$chakraTheme();
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    },
    colorPalette() {
      return this.$store.state.currentColorPalette;
    },
  },
  methods: {
    changeColorPalette(newColor) {
      this.$store.commit("setColorPalette", newColor);
    },
    showToast() {
      this.$toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    },
  },
};
</script>