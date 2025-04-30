import { Dimensions, Platform, StyleSheet } from "react-native";
import { Color } from "./Colors";
import { RFValue } from "react-native-responsive-fontsize";


const { width: screenWidth, height } = Dimensions.get('window')

export const JoinCompanyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  form: {
    paddingHorizontal: RFValue(16),
    marginVertical: RFValue(20),
  },
  inputContainer: {
    marginVertical: RFValue(16),
  },
  input: {
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: RFValue(4),
    padding: RFValue(20),
    fontSize: RFValue(14),
    height: RFValue(45),
  },
  nextButton: {
    backgroundColor: Color.gray,
    marginHorizontal: RFValue(16),
    padding: RFValue(14),
    alignItems: 'center',
    position: 'absolute',
    bottom: RFValue(30),
    left: RFValue(0),
    right: RFValue(0),
    height: RFValue(45),
  },
  nextButtonText: {
    color: Color.white,
    fontWeight: '500',
    fontSize: RFValue(14),
    textTransform: 'uppercase',
  },
})

export const HeaderStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(10),
    backgroundColor: Color.primary
  },
  menuButton: {
    padding: RFValue(5),
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(5)
  },
  avatarContainer: {
    width: RFValue(32),
    height: RFValue(32),
    borderRadius: RFValue(20),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: RFValue(10),
  },
  avatar: {
    width: RFValue(25),
    height: RFValue(25),
    borderRadius: RFValue(18),
  },
  greeting: {
    color: "white",
    fontSize: RFValue(15),
    fontWeight: "500",
  },
  notificationButton: {
    padding: RFValue(5),
  },
});
export const ProfilePhotoStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth * 0.85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    padding: RFValue(5),
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: RFValue(5),
  },
  title: {
    color: Color.primary,
    fontSize: RFValue(16),
    fontWeight: 700,
    paddingVertical: RFValue(25),
    paddingHorizontal: RFValue(5),
  },
  buttonContainer: {
    margin: RFValue(10),
    backgroundColor: Color.primary,
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(25),
    borderRadius: RFValue(5),
  },
  buttonText: {
    color: Color.white,
    fontSize: RFValue(16),
  },
});

export const EmployersStyles = StyleSheet.create({
  card: {
    borderRadius: RFValue(5),
    // overflow: 'hidden',
    backgroundColor: Color.white,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageWrapper: {
    height: RFValue(160),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: RFValue(40),
    left: RFValue(40),
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),
    backgroundColor: Color.black,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // shadow for Android
    shadowColor: Color.black, // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Color.black,
  },
});

export const ScheduleCardStyles = StyleSheet.create({
  eventCard: {
    backgroundColor: Color.white,
    borderRadius: RFValue(12),
    marginBottom: RFValue(16),
    // overflow: "hidden",
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: RFValue(16),
  },
  eventDay: {
    fontSize: RFValue(14),
    fontWeight: "600",
  },
  confirmedBadge: {
    backgroundColor: Color.yellow,
    paddingVertical: RFValue(6),
    paddingHorizontal: RFValue(12),
    borderRadius: RFValue(16),
  },
  confirmedText: {
    color: Color.white,
    fontWeight: "600",
  },
  eventDetails: {
    padding: RFValue(16),
    paddingTop: RFValue(0),
  },
  eventCompany: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: RFValue(12),
  },
  eventCompanyLogo: {
    width: RFValue(24),
    height: RFValue(24),
    marginRight: RFValue(8),
  },
  eventName: {
    fontSize: RFValue(14),
    fontWeight: "500",
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: RFValue(8),
  },
  eventIcon: {
    marginRight: RFValue(8),
  },
  eventInfoText: {
    fontSize: RFValue(14),
    color: Color.black,
  },
})

export const ScheduleScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  content: {
    flex: 1,
    padding: RFValue(16),
  },
  scheduleTitle: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginBottom: RFValue(16),
  },
  tabContainer: {
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabWrapper: {
    flexDirection: "row",
    backgroundColor: Color.white,
    borderRadius: RFValue(25),
    borderColor: Color.primary,
    borderWidth: 1,
    flex: 1,
    marginLeft: RFValue(16),
  },
  tab: {
    flex: 1,
    paddingVertical: RFValue(8),
    alignItems: "center",
    borderRadius: RFValue(25),
  },
  activeTab: {
    backgroundColor: Color.primary,
  },
  tabText: {
    color: Color.primary,
    fontWeight: "500",
  },
  activeTabText: {
    color: Color.white,
    fontWeight: "600",
  },
})

export const NoOffersCardStyles = StyleSheet.create({
  container: {
    height: RFValue(150),
    backgroundColor: Color.primaryLight,
    borderRadius: RFValue(12),
    padding: RFValue(16),
    position: "relative",
    elevation: 5, // shadow for Android
    shadowColor: Color.black, // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: Color.primary,
  },
  subTitle: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: Color.primary,
    marginBottom: RFValue(16),
  },
  button: {
    backgroundColor: Color.white,
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(5),
    alignSelf: "flex-start",
  },
  buttonText: {
    color: Color.primary,
    fontWeight: "600",
    fontSize: RFValue(14),
  },
  imageContainer: {
    position: "relative",
    width: RFValue(100),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const NotificationCardStyles = StyleSheet.create({
  notificationsSection: {
    marginBottom: RFValue(16),
  },
  notificationsTitle: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginBottom: RFValue(16),
  },
  notificationCard: {
    backgroundColor: Color.white,
    borderRadius: RFValue(10),
    padding: RFValue(16),
    elevation: 3, // shadow for Android
    shadowColor: Color.black, // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  notificationContent: {
    paddingVertical: RFValue(12),
  },
  notificationText: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  bookedText: {
    color: Color.green,
    fontWeight: "600",
  },
  boldText: {
    fontWeight: "600",
  },
  notificationTime: {
    color: Color.grayDark,
    marginTop: RFValue(4),
  },
  divider: {
    height: 1,
    backgroundColor: Color.grayDark,
  },
})

export const HomeScreenstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  SectionText: {
    fontSize: RFValue(18),
    fontWeight: 700,
    fontFamily: "Arial",
    marginVertical: RFValue(10),
    marginHorizontal: RFValue(5),
  },
  content: {
    flex: 1,
    padding: RFValue(20),
  },
  offersCard: {
    backgroundColor: Color.white,
    borderRadius: RFValue(12),
    marginBottom: RFValue(16),
  },
});

export const chatstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  chatLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  chatMessage: {
    fontSize: 14,
    color: "#666",
  },
  chatTime: {
    fontSize: 12,
    color: "#666",
  },
});

export const IncomeCardstyles = StyleSheet.create({
  incomeCard: {
    backgroundColor: Color.white,
    borderRadius: RFValue(12),
    padding: RFValue(16),
    marginBottom: RFValue(16),
    flexDirection: "row",
    alignItems: "center",
    elevation: 3, // shadow for Android
    shadowColor: Color.black, // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    gap: RFValue(50)
  },
  incomeLeft: {
    marginRight: RFValue(16),
  },
  incomeMiddle: {
    flex: 1,
  },
  incomeTitle: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    marginBottom: RFValue(7),
  },
  incomeRight: {
    alignItems: "flex-start",
    flex: 1,
  },
  incomeSubtitle: {
    fontSize: RFValue(16),
    color: Color.black,
  },
  viewButton: {
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: RFValue(5),
    marginVertical: RFValue(5),
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(20),
  },
  viewButtonText: {
    color: Color.primary,
    fontWeight: "600",
  },
})

export const SidebarContentstyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: "center",
    gap: RFValue(5),
    paddingVertical: RFValue(10),
    borderBottomWidth: 1,
    borderBottomColor: Color.grayLight
  },
  logo: {
    width: RFValue(38),
    height: RFValue(38),
    borderRadius: RFValue(19),
  },
  userName: {
    fontSize: RFValue(14),
    fontWeight: '500',
  },
  menuItems: {
    marginVertical: RFValue(7),
    flexGrow: 1
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(10),
    gap: RFValue(8)
  },
  menuIconContainer: {
    width: RFValue(30),
    height: RFValue(30),
    borderRadius: RFValue(20),
    backgroundColor: Color.mistyRoseLight,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: RFValue(12),
    fontWeight: '400',
  },
  footer: {
    alignItems: "center",
    paddingVertical: RFValue(15)
  },
  version: {
    fontSize: RFValue(10),
    color: Color.black,
    marginVertical: RFValue(8),
  },
  terms: {
    fontSize: RFValue(10),
    color: Color.primary,
    textDecorationLine: 'underline'
  },
});

export const CustomTopTabBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: RFValue(10),
    paddingTop: RFValue(10),
    backgroundColor: Color.white,
    borderBottomWidth: 1,
    paddingBottom: RFValue(8),
    borderBottomColor: Color.grayLight,
  },
  menuIcon: {
    width: "15%",
    alignItems: "flex-start"
  },
  tabContainer: {
    width: "70%",
    flexDirection: "row",
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: RFValue(30),
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: Color.white,
  },
  tabWrapper: {
    flex: 1,
    paddingVertical: RFValue(9),
    borderRadius: RFValue(30),
    alignItems: "center",
  },
  tabText: {
    fontSize: RFValue(12),
    fontWeight: "600",
  }
})

// Login Screen Style 
export const LoginScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  contentWrapper: {
    flex: 1,
    marginTop: RFValue(50),
    alignItems: 'center',
    paddingHorizontal: RFValue(16),
  },
  titleText: {
    marginTop: RFValue(26),
    fontWeight: '700',
    fontSize: RFValue(18),
    color: Color.black,
  },
  subtitleText: {
    marginTop: RFValue(8),
    fontSize: RFValue(16),
    fontWeight: '400',
    textAlign: 'center',
  },
  phoneInputContainer: {
    marginTop: RFValue(30),
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(14),
    width: '100%',
  },
  countryCodeButton: {
    borderRadius: 4,
    paddingVertical: RFValue(14),
    paddingHorizontal: RFValue(10),
    borderWidth: 1,
    borderColor: Color.gray
  },
  countryCodeText: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: Color.black
  },
})

// Input Style 
export const InputStyles = StyleSheet.create({
  input: {
    fontSize: RFValue(14),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.gray,
    paddingVertical: RFValue(14),
    paddingHorizontal: RFValue(10),
    color: Color.black
  }

})

// Primary Button Style 
export const PrimaryButtonStyles = StyleSheet.create({
  buttonContainer: {
    marginTop: RFValue(20),
    backgroundColor: Color.primary,
    paddingVertical: RFValue(12),
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: RFValue(16),
    fontWeight: '400',
    color: Color.white,
  },
})

// Verification Screen Style 
export const VerificationScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  contentWrapper: {
    flex: 1,
    marginTop: RFValue(34),
    alignItems: 'center',
    paddingHorizontal: RFValue(16),
  },
  titleText: {
    marginTop: RFValue(32),
    fontWeight: '700',
    fontSize: RFValue(18),
    color: Color.black,
  },
  subtitleText: {
    marginTop: RFValue(10),
    fontSize: RFValue(16),
    fontWeight: '400',
    textAlign: 'center',
  },
  OtpInputContainer: {
    marginTop: RFValue(20),
    gap: RFValue(10)
  },
  pinContainer: {
    borderRadius: 4,
    flex: 1
  },
  focusPinContainer: {
    borderColor: Color.primary
  },
  focusPin: {
    backgroundColor: Color.primary
  },
  messageText: {
    marginTop: RFValue(20),
    fontSize: RFValue(12),
    fontWeight: '300',
    textAlign: 'center',
    color: Color.secondaryText
  },
  tryAgainButtonText: {
    marginTop: RFValue(20),
    fontSize: RFValue(12),
    fontWeight: '300',
    textAlign: 'center',
    color: Color.primary
  }
})

// Offers Screen Style
export const OffersScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
    justifyContent: "space-between",
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(8),
    borderBottomWidth: 1,
    borderBottomColor: Color.grayLight,
  },
  menuButton: {
    padding: RFValue(4),
  },
  dateSelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(4),
    padding: RFValue(4),
  },
  dateText: {
    fontSize: RFValue(14),
    fontWeight: "600",
  },
  filterButton: {
    width: RFValue(36),
    height: RFValue(36),
    borderRadius: RFValue(18),
    backgroundColor: Color.grayLight,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(8),
    backgroundColor: Color.white
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.grayLight,
    borderRadius: RFValue(20),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(10),
  },
  searchIcon: {
    marginRight: RFValue(4),
  },
  searchInput: {
    flex: 1,
    fontSize: RFValue(12),
    color: Color.black,
    padding: 0,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: RFValue(16),
  },
  emptyState: {
    alignItems: "center",
    paddingHorizontal: RFValue(16),
  },
  emptyTitle: {
    fontSize: RFValue(16),
    fontWeight: "bold",
    marginVertical: RFValue(8),
    color: Color.primary,
  },
  sheetwrapper: {
    flex: 1,
    padding: 0,
  },
  sheetdraggableIcon: {
    margin: 0,
    marginTop: RFValue(8),
  },
  sheetcontainer: {
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
    paddingHorizontal: RFValue(10)
  }
});

//Filter Modal Style 
export const FilterModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  header: {
    paddingVertical: RFValue(10),
    backgroundColor: Color.white,
    borderBottomWidth: 1,
    borderBottomColor: Color.grayLight,
    justifyContent: 'center'
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: "bold",
  },
  section: {
    padding: RFValue(15),
    borderBottomWidth: 1,
    borderBottomColor: Color.grayLight
  },
  sectionTitle: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    marginBottom: RFValue(10)
  },
  findButton: {
    padding: RFValue(10),
    borderRadius: RFValue(20),
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.primary
  },
  findButtonText: {
    color: Color.primary,
    fontSize: RFValue(12)
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: RFValue(4),
  },
  radio: {
    height: RFValue(18),
    width: RFValue(18),
    borderWidth: 1,
    borderColor: Color.secondary,
    borderRadius: RFValue(9),
    marginRight: RFValue(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    height: RFValue(12),
    width: RFValue(12),
    borderRadius: RFValue(6),
    backgroundColor: Color.primary,
    margin: 0,
  },
  radioText: {
    fontSize: RFValue(12)
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    padding: RFValue(8),
  },
  clearButton: {
    backgroundColor: Color.grayLight,
    padding: RFValue(5),
    borderRadius: RFValue(10),
    marginLeft: 10,
  },
  clearButtonText: {
    color: Color.secondaryText,
    fontSize: RFValue(10)
  },
  doneButton: {
    backgroundColor: Color.primary,
    padding: RFValue(14),
    borderRadius: RFValue(8),
    alignItems: "center",
    margin: RFValue(20),
  },
  doneButtonText: {
    color: Color.white,
    fontWeight: '600',
    fontSize: RFValue(12)
  },
});

// Setting Screen Style
export const SettingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  section: {
    paddingHorizontal: RFValue(15),
    marginTop: RFValue(15),
  },
  sectionTitle: {
    fontSize: RFValue(14),
    fontWeight: '500',
    marginBottom: RFValue(12),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: RFValue(10),
    padding: RFValue(10),
    borderWidth: 1,
    borderColor: Color.grayLight,
    marginBottom: RFValue(4),
  },
  dropdownText: {
    fontSize: RFValue(12),
    padding: RFValue(8),
    borderRadius: RFValue(4),
    backgroundColor: Color.primary,
    color: Color.white,
    fontWeight: '500',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(12),
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: RFValue(14),
    paddingHorizontal: RFValue(20),
  },
  radioContainer: {
    marginRight: RFValue(10),
  },
  radioOuter: {
    height: RFValue(18),
    width: RFValue(18),
    borderRadius: RFValue(9),
    borderWidth: 2,
    borderColor: Color.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: Color.primary,
  },
  radioInner: {
    height: RFValue(9),
    width: RFValue(9),
    borderRadius: RFValue(4.5),
    backgroundColor: Color.primary,
  },
  languageText: {
    fontSize: RFValue(14),
  },
  separator: {
    height: 1,
    backgroundColor: Color.gray,
  },
  flatListContent: {
    paddingBottom: Platform.OS === 'android' ? RFValue(80) : RFValue(20),
  },
  flatList: {
    flexGrow: 1,
  },
});

// Notification Screen Style
export const NotificationScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  content: {
    flex: 1,
  },
  notificationItem: {
    padding: RFValue(14),
  },
  notificationText: {
    fontSize: RFValue(12),
    lineHeight: RFValue(20),
  },
  bookedText: {
    color: Color.green,
    fontWeight: "600",
  },
  boldText: {
    fontWeight: "600",
  },
  notificationTime: {
    color: Color.drawerIcon,
    marginTop: RFValue(4),
  },
  divider: {
    height: 1,
    backgroundColor: Color.grayLight,
  },
});

// My Requests Screen Style
export const MyRequestsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: RFValue(16),
  },
  emptyText: {
    fontSize: RFValue(18),
    fontWeight: '500',
    color: Color.primary,
    textAlign: 'center',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: RFValue(10),
    right: RFValue(0),
    marginRight: RFValue(16),
    marginBottom: RFValue(16),
  },
});

// New Request Screen Style
export const NewRequestScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: RFValue(15),
  },
  sectionTitle: {
    fontSize: RFValue(14),
    fontWeight: '400',
    marginVertical: RFValue(10),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(10),
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: RFValue(15),
    backgroundColor: Color.white,
  },
  optionBadge: {
    backgroundColor: Color.primary,
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(16),
    borderRadius: RFValue(8),
    color: Color.white,
    fontWeight: '500',
  },
  segmentedControl: {
    flexDirection: 'row',
    borderRadius: RFValue(28),
    overflow: 'hidden',
    marginBottom: RFValue(10),
    borderWidth: 1,
    borderColor: Color.gray,
  },
  segmentButton: {
    flex: 1,
    height: RFValue(40),
    paddingVertical: RFValue(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentActive: {
    backgroundColor: Color.primary
  },
  dateText: {
    flex: 1,
    fontSize: RFValue(12),
    marginLeft: RFValue(8),
    paddingVertical: RFValue(8),
    color: Color.black,
  },
  segmentText: {
    color: Color.black,
    fontWeight: '500',
  },
  segmentActiveText: {
    color: Color.white,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: RFValue(8),
    padding: RFValue(16),
    height: RFValue(120),
    textAlignVertical: 'top',
  },
  buttonContainer: {
    paddingHorizontal: RFValue(15),
    gap: RFValue(10),
    marginBottom: RFValue(20),
  },
  sendButton: {
    backgroundColor: Color.primary,
    paddingVertical: RFValue(16),
    borderRadius: RFValue(8),
    alignItems: 'center',
  },
  sendButtonText: {
    color: Color.white,
    fontWeight: '600',
    fontSize: RFValue(12),
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: Color.primary,
    paddingVertical: RFValue(16),
    borderRadius: RFValue(8),
    alignItems: 'center',
  },
  cancelButtonText: {
    color: Color.primary,
    fontWeight: '600',
    fontSize: RFValue(12),
  },
  multyDateContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: RFValue(10)
  }
});

export const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  profileHeader: {
    padding: RFValue(24),
    alignItems: "center",
    flexDirection: "row",
    gap: RFValue(15)
  },
  profileInfo: {
    alignItems: "center",
  },
  profileName: {
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
  profilePhone: {
    fontSize: RFValue(12),
    color: Color.black,
    marginVertical: RFValue(5),
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(4),
    color: Color.white,
    padding: RFValue(6),
    borderRadius: RFValue(3),
    backgroundColor: Color.primary
  },
  editButtonText: {
    color: Color.white,
    fontSize: RFValue(12),
  },
  section: {
    padding: RFValue(24),
  },
  sectionTitle: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    marginBottom: RFValue(10)
  },
  count: {
    fontWeight: "bold",
  },
  divider: {
    height: RFValue(1),
    backgroundColor: Color.gray,
  },
  employerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(30)
  },
  employerLogo: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),
  },
  employerName: {
    fontSize: RFValue(14),
    fontWeight: "500",
    flex: 1,
  },
});

export const EventInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  imageWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: RFValue(30),
    marginTop: RFValue(4)
  },
  aboutContainer: {
    backgroundColor: Color.white,
    padding: RFValue(15),
    borderRadius: RFValue(8),
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: RFValue(-90),
  },
  aboutTitle: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    marginBottom: RFValue(5),
  },
  aboutText: {
    fontSize: RFValue(11),
    color: Color.black,
    marginVertical: RFValue(10),
  },
  tagline: {
    fontSize: RFValue(13),
    color: Color.black,
    marginVertical: RFValue(10),
  },
  socialIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: RFValue(6),
  },
  infoContainer: {
    paddingHorizontal: RFValue(10),
    marginTop: RFValue(70),
  },
  sectionTitle: {
    fontSize: RFValue(16),
    padding: RFValue(10),
    fontWeight: 'bold',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(10),
    paddingHorizontal: RFValue(5),
    paddingVertical: RFValue(8),
    borderBottomWidth: 1,
    borderBottomColor: Color.gray
  },
  infoText: {
    flex: 1,
    fontSize: RFValue(14),
  },
})
// Calendar List Style
export const CustomCalendarListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    marginBottom: RFValue(40)
  },
  header: {
    backgroundColor: Color.white,
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(15),
    borderBottomWidth: 1,
    borderBottomColor: Color.grayLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: '400',
    color: Color.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(10),
  },
  dateRangeInfo: {
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(15),
    backgroundColor: Color.grayLight,
  },
  dateRangeText: {
    fontSize: RFValue(12),
    color: Color.black,
    fontWeight: '500',
  }
})

export const IncomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: RFValue(24),
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  bottomContent: {
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: RFValue(16),
    marginVertical: RFValue(16),
  },
  emptyDescription: {
    fontSize: RFValue(12),
    color: Color.grayDark,
    textAlign: "center",
    lineHeight: RFValue(18),
    paddingVertical: RFValue(15)
  },
});

// Feed Screen Style
export const FeedScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  listContainer: {
    padding: RFValue(10),
  },
  card: {
    backgroundColor: Color.white,
    padding: RFValue(10),
    borderRadius: RFValue(8),
    shadowColor: Color.black,
    shadowOpacity: 0.10,
    shadowRadius: RFValue(10),
    shadowOffset: { width: 1, height: 4 },
    elevation: RFValue(2),
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: RFValue(8),
    borderBottomWidth: 1,
    borderColor: Color.grayLight,
    gap: RFValue(10),
  },
  logo: {
    width: RFValue(42),
    height: RFValue(42),
    borderRadius: RFValue(21),
    marginRight: RFValue(10),
  },
  company: {
    fontSize: RFValue(12),
    fontWeight: "600",
    color: Color.black
  },
  time: {
    fontSize: RFValue(10),
    color: Color.secondaryText,
    marginTop: 2,
  },
  message: {
    fontSize: RFValue(12),
    color: "#333",
    paddingVertical: RFValue(6),
  },
});
// Edit Profile Screen Style
export const EditProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  profilePictureContainer: {
    alignItems: 'center',
    paddingVertical: RFValue(20),
  },
  formContainer: {
    paddingHorizontal: RFValue(20),
    marginBottom: RFValue(8),
  },
  label: {
    fontSize: RFValue(12),
    fontWeight: '400',
    marginVertical: RFValue(8),
  },
  input: {
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: RFValue(8),
    padding: RFValue(14),
    fontSize: RFValue(12),
    marginBottom: RFValue(8),
  },
  buttonContainer: {
    paddingHorizontal: RFValue(20),
    marginBottom: RFValue(10),
  },
  saveButton: {
    backgroundColor: Color.primary,
    borderRadius: RFValue(8),
    padding: RFValue(16),
    alignItems: 'center',
  },
  saveButtonText: {
    color: Color.white,
    fontSize: RFValue(12),
    fontWeight: '600',
  },
});

export const DocumentsScreenStyles = StyleSheet.create({
  AccordionContainer: {
    flex: 1,
    alignItems: 'center',
    gap: RFValue(20)
  },
  AccordionItemText: {
    fontWeight: "bold",
    fontSize: RFValue(14)
  },
  ActionTrigger: {
    flexDirection: 'row',
    gap: RFValue(10),
    alignItems: 'center'
  }
})
// Update Info Screen Style
export const UpdateInfoScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  keyboardAvoidingView: {
    flex: 1,
    paddingHorizontal: RFValue(15),
  },
  scrollContainer: {
    paddingBottom: RFValue(20),
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: Color.black,
    marginTop: RFValue(15),
    marginBottom: RFValue(8),
  },
  label: {
    fontSize: RFValue(12),
    fontWeight: '400',
    color: Color.black,
    marginTop: RFValue(10),
    marginBottom: RFValue(6),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(12),
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: RFValue(6),
    backgroundColor: Color.white,
    marginBottom: RFValue(10),
  },
  dateText: {
    flex: 1,
    fontSize: RFValue(12),
    marginLeft: RFValue(8),
    color: Color.black,
  },
  optionBadge: {
    backgroundColor: Color.primary,
    paddingVertical: RFValue(6),
    paddingHorizontal: RFValue(12),
    borderRadius: RFValue(4),
    color: Color.white,
    fontWeight: '500',
    fontSize: RFValue(12),
  },
  saveButton: {
    backgroundColor: Color.primary,
    paddingVertical: RFValue(12),
    borderRadius: RFValue(6),
    alignItems: 'center',
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
  },
  saveButtonText: {
    color: Color.white,
    fontSize: RFValue(14),
    fontWeight: '500',
  }
});
// Custom Input Styles
export const CustomInputStyles = StyleSheet.create({
  label: {
    fontSize: RFValue(12),
    fontWeight: '400',
    color: Color.black,
    marginTop: RFValue(10),
    marginBottom: RFValue(6),
  },
  input: {
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: RFValue(6),
    padding: RFValue(12),
    fontSize: RFValue(12),
    backgroundColor: Color.white,
    marginBottom: RFValue(4),
  },
  textArea: {
    height: RFValue(100),
    textAlignVertical: 'top',
  },
})
// Custom Upload Input Styles
export const UploadInputStyles = StyleSheet.create({
  container: {
    marginBottom: RFValue(2),
  },
  label: {
    fontSize: RFValue(12),
    fontWeight: '400',
    marginTop: RFValue(10),
    marginBottom: RFValue(6),
    color: Color.black,
  },
  previewContainer: {
    position: 'relative',
    width: RFValue(45),
    height: RFValue(45),
    borderRadius: RFValue(6),
    overflow: 'visible',
    marginTop: RFValue(5),
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: RFValue(6),
  },
  fileName: {
    backgroundColor: Color.gray,
    padding: RFValue(8),
    borderRadius: RFValue(6),
    fontSize: RFValue(12),
  },
  removeBtn: {
    position: 'absolute',
    top: RFValue(-4),
    right: RFValue(-4),
    backgroundColor: Color.primary,
    borderRadius: RFValue(7.5),
    width: RFValue(15),
    height: RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    elevation: 5,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  btnRow: {
    flexDirection: 'row',
    gap: RFValue(10),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(6),
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: RFValue(4),
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(12),
  },
  btnText: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: Color.grayDark,
  },
})