// src/data/road-signs.ts
// Source: liberiatraffic.com Signs & Signals reference.

export type SignCategory =
  | "signals" | "lane-signals" | "phb" | "sign-colors" | "sign-shapes"
  | "regulatory" | "warning" | "railroad" | "work-zone" | "pavement-markings";

export type SignShape =
  | "circle" | "octagon" | "triangle" | "rectangle"
  | "diamond" | "pentagon" | "crossbuck" | "none";

export type SignColor =
  | "red" | "yellow" | "green" | "white" | "black"
  | "orange" | "blue" | "brown" | "pink" | "yellow-green";

export type RoadSign = {
  id: string;
  category: SignCategory;
  name: string;
  description: string;
  shape?: SignShape;
  primaryColor?: SignColor;
  liberiaSpecific?: boolean;
};

export const signCategories: { id: SignCategory; label: string }[] = [
  { id: "signals", label: "Traffic Signals" },
  { id: "lane-signals", label: "Lane Use Signals" },
  { id: "phb", label: "Pedestrian Hybrid Beacons" },
  { id: "sign-colors", label: "Sign Colors" },
  { id: "sign-shapes", label: "Sign Shapes" },
  { id: "regulatory", label: "Regulatory Signs" },
  { id: "warning", label: "Warning Signs" },
  { id: "railroad", label: "Railroad Crossings" },
  { id: "work-zone", label: "Work Zones" },
  { id: "pavement-markings", label: "Pavement Markings" },
];

export const sectionIntros: Record<SignCategory, string> = {
  signals: "Traffic signals apply to drivers, motorcycle riders, bicyclists, moped riders and pedestrians. Obey all signals unless directed by a police officer; always follow the officer's direction.",
  "lane-signals": "Lane use signals indicate lanes where you can or cannot drive during different hours of the day.",
  phb: "Pedestrian Hybrid Beacons appear over intersections without stoplights and alert drivers when pedestrians are at a crosswalk.",
  "sign-colors": "The color of a traffic sign communicates important information. In poor visibility you may see the color before you can read the sign.",
  "sign-shapes": "The shape of a sign can tell you its meaning even before you can read it.",
  regulatory: "Regulatory signs inform you of the law — you must obey them. A red circle with a slash means NO; the symbol inside the circle tells you what is prohibited.",
  warning: "Warning signs alert you to possible hazards ahead. Slow down and watch for other markings, signs, signals or work zones that may follow.",
  railroad: "Always look, listen, and slow down when approaching railroad crossings. School buses must always stop at railroad crossings — even when the lights are not flashing.",
  "work-zone": "In a work zone, the lives of highway workers depend on drivers obeying posted speed limits and avoiding distractions. Speeding in a highway work zone can result in a fine of up to $500. Using a handheld communications device in a work zone carries a $250 fine. Orange marks a work zone — slow down and be alert.",
  "pavement-markings": "Road markings guide and warn drivers as well as regulate traffic. Markings may be red, yellow, or white, and each color has a different meaning. Note: many two-lane roads in Liberia do not have lane markings.",
};

export const roadSigns: RoadSign[] = [
  { id: "red-light", category: "signals", name: "Red Light", description: "Come to a complete stop at the stop line, or — if there is no stop line — before entering the intersection or reaching the crosswalk. Remain stopped as long as the signal is red, unless turns are allowed.", shape: "circle", primaryColor: "red" },
  { id: "right-turn-on-red", category: "signals", name: "Right Turn on Red", description: "You may turn right while the signal is red after a complete stop. Look both ways and yield the right-of-way to pedestrians and other traffic. Watch for less visible vehicles such as motorcycles, bicycles and mopeds. You may not turn right on red where signs read \"No Turn on Red\" or where a red arrow points right." },
  { id: "left-turn-on-red", category: "signals", name: "Left Turn on Red", description: "You may turn left at a red light from a one-way street onto another one-way street, after a complete stop and after yielding right-of-way. You may not turn left on red where signs read \"No Turn on Red\" or where a red arrow points left." },
  { id: "red-arrow", category: "signals", name: "Red Arrow", description: "A red arrow means you must stop if you intend to move in the direction of the arrow. Liberia law prohibits right and left turns at red arrow lights. If you are traveling in another country or state, check its laws on red-arrow turns.", liberiaSpecific: true },
  { id: "flashing-red-light", category: "signals", name: "Flashing Red Light", description: "Come to a complete stop and yield to oncoming vehicles and pedestrians. Proceed when the way is clear. At railroad crossings, you must stop completely even if you don't see a train.", shape: "circle", primaryColor: "red" },
  { id: "flashing-red-arrow", category: "signals", name: "Flashing Red Arrow", description: "Come to a complete stop, yield right-of-way to vehicles coming from the other direction and to pedestrians, then proceed in the direction of the arrow when the way is clear." },
  { id: "yellow-light", category: "signals", name: "Yellow Light or Arrow", description: "A caution warning that the light is about to change. If you have not entered the intersection, stop — or, if it's unsafe to stop, proceed cautiously. If you are already in the intersection, go through cautiously. Do not speed up to beat the light.", shape: "circle", primaryColor: "yellow" },
  { id: "flashing-yellow-light", category: "signals", name: "Flashing Yellow Light", description: "Slow down and proceed with caution. Flashing yellow lights are placed at locations with higher-than-normal hazardous conditions." },
  { id: "flashing-yellow-arrow", category: "signals", name: "Flashing Yellow Arrow", description: "You may turn in the direction of the arrow if the way is clear. Yield to vehicles from the other direction and to pedestrians. Watch for motorcycles, bicycles and mopeds. If a light changes from red to flashing yellow arrow while a pedestrian is in the intersection, allow them to cross before turning." },
  { id: "green-light", category: "signals", name: "Green Light or Arrow", description: "You may go if the way is clear. At a green arrow, you may go in the direction of the arrow if the way is clear. If you are turning without a green arrow, you must yield right-of-way to vehicles from the other direction and to pedestrians. Watch for less visible vehicles.", shape: "circle", primaryColor: "green" },
  { id: "out-of-service", category: "signals", name: "Out-of-Service Signals", description: "When traffic signals are not working due to a power outage and not displaying any lights, you must stop and proceed as though it were an all-way stop. This does not apply if a law enforcement officer or other authorized person is directing traffic, or if portable stop signs are in use." },
  { id: "red-x", category: "lane-signals", name: "Red X", description: "Never drive in a lane marked with a red X." },
  { id: "yellow-x", category: "lane-signals", name: "Yellow X or Yellow Diagonal Downward Arrow", description: "Move out of the lane as soon as it is safely possible." },
  { id: "green-arrow-lane", category: "lane-signals", name: "Green Arrow", description: "You are permitted to drive in a lane marked with a green arrow signal." },
  { id: "left-turn-arrow", category: "lane-signals", name: "Left-Turn Arrow", description: "You are permitted to enter a lane marked with a one-way or two-way arrow only to turn in the direction of the arrow." },
  { id: "phb", category: "phb", name: "Pedestrian Hybrid Beacon (PHB)", description: "When a pedestrian activates a PHB, one yellow light at the bottom flashes. Next, the yellow light turns solid to alert drivers to prepare to stop. Then the top two red lights turn solid while a walk signal appears at the crosswalk — drivers must stop. While the walk signal counts down for pedestrians, the PHB's two red lights alternate flashing — telling drivers that if the crosswalk is now clear, they may proceed with caution." },
  { id: "color-red", category: "sign-colors", name: "Red with White", description: "Conveys stop, yield, do not, and no. Used on stop signs, yield signs, do not enter, wrong way, the no-turn circle/slash, and parking restrictions.", primaryColor: "red" },
  { id: "color-black", category: "sign-colors", name: "Black with White", description: "Conveys regulatory information. Speed limit, do not pass, and no turns are examples where operation is regulated by law.", primaryColor: "black" },
  { id: "color-yellow", category: "sign-colors", name: "Yellow with Black", description: "Conveys a warning. Curve ahead, stop ahead, overhead clearance, and slippery when wet are all examples. A specialized class uses strong yellow/green with black to advise of school zone, pedestrian and bicyclist activities.", primaryColor: "yellow" },
  { id: "color-green-blue-brown", category: "sign-colors", name: "Green / Blue / Brown with White", description: "Provide helpful information. Green signs indicate destinations. Blue signs indicate motorist services. Brown signs indicate historical or cultural points of interest.", primaryColor: "green" },
  { id: "color-orange-pink", category: "sign-colors", name: "Orange or Pink with Black", description: "Advise and warn in construction (orange) and incident (pink) areas. Used alongside black-and-white signs that convey regulations existing only because of the construction or the incident.", primaryColor: "orange" },
  { id: "shape-octagon", category: "sign-shapes", name: "Octagon — Stop", description: "This eight-sided shape always means stop. You must come to a complete stop at the sign, stop line, pedestrian crosswalk, or curb. Wait for any vehicle or pedestrian to clear the way. At \"All Way\" or \"4 Way\" intersections, all vehicles on all roads leading into the intersection must stop. If two drivers arrive at the same time, the driver on the left must yield to the driver on the right.", shape: "octagon", primaryColor: "red" },
  { id: "shape-triangle", category: "sign-shapes", name: "Triangle — Yield", description: "You must slow down as you come to the intersection. Be prepared to stop. Let any vehicles, pedestrians, or bicyclists safely pass before you proceed.", shape: "triangle", primaryColor: "red" },
  { id: "shape-rectangle", category: "sign-shapes", name: "Rectangle — Regulatory or Guide", description: "Vertical rectangular signs generally give instructions or tell you the law. Horizontal rectangular signs may give directions or information.", shape: "rectangle" },
  { id: "shape-diamond", category: "sign-shapes", name: "Diamond — Warning", description: "Diamond signs warn you of special conditions or hazards ahead. Slow down and drive with caution. Be ready to stop.", shape: "diamond", primaryColor: "yellow" },
  { id: "shape-pentagon", category: "sign-shapes", name: "Pentagon — School Zone / School Crossing", description: "This five-sided shape marks school zones and warns of school crossings. Two signs may be used together to show the actual location of the crosswalk.", shape: "pentagon", primaryColor: "yellow-green" },
  { id: "speed-limit", category: "regulatory", name: "Speed Limit", description: "Indicates the maximum legal speed when weather conditions are good. Some roads have electronic speed limit signs that change based on conditions. During rain, snow or ice you may receive a ticket for driving too fast for conditions, even if you are at or below the posted limit." },
  { id: "do-not-enter", category: "regulatory", name: "Do Not Enter / Wrong Way", description: "These signs mean you cannot drive in that direction. If you drive past these signs you are going the wrong way and could have a head-on crash. Slow down, pull over, and cautiously turn around.", primaryColor: "red" },
  { id: "one-way", category: "regulatory", name: "One Way", description: "Traffic flows only in the direction of the arrow." },
  { id: "no-left-turn", category: "regulatory", name: "No Left Turn", description: "Left turns are against the law. In Liberia, U-turns are considered as two left turns and are illegal if this sign is posted.", liberiaSpecific: true },
  { id: "no-right-turn", category: "regulatory", name: "No Right Turn", description: "Right turns are illegal. Do not make a right turn when you see this sign." },
  { id: "no-u-turn", category: "regulatory", name: "No U-Turn", description: "U-turns are illegal. Do not make a U-turn when you see this sign." },
  { id: "no-turn-on-red", category: "regulatory", name: "No Turn on Red", description: "You may not turn on the red light. Wait for the signal to turn green." },
  { id: "do-not-pass", category: "regulatory", name: "Do Not Pass", description: "This sign marks the beginning of a no-passing zone. You may not pass cars ahead of you in your lane, even if the way is clear." },
  { id: "left-turn-yield-on-green", category: "regulatory", name: "Left Turn Yield on Green", description: "Used with a traffic signal. Tells you that traffic turning left at a green light does not have right-of-way and must yield to oncoming traffic. Stop and look for oncoming traffic, then proceed cautiously." },
  { id: "keep-right", category: "regulatory", name: "Keep Right", description: "A traffic island, median or barrier is ahead. Keep to the side indicated by the arrow." },
  { id: "lane-use-control", category: "regulatory", name: "Lane Use Control", description: "Used where turns are required or where special turning movements are permitted for specific lanes. Traffic in the lane must turn in the direction of the arrow." },
  { id: "hov", category: "regulatory", name: "High Occupancy Vehicle", description: "Indicates lanes reserved for buses and vehicles with a driver and one or more passengers as specified on the sign." },
  { id: "disabled-parking", category: "regulatory", name: "Disabled Parking", description: "Parking spaces marked with these signs are reserved for people with disabled parking permits." },
  { id: "advisory-speed", category: "warning", name: "Advisory Speed", description: "Indicates the maximum safe speed for a highway exit.", shape: "diamond", primaryColor: "yellow" },
  { id: "reduced-speed-ahead", category: "warning", name: "Reduced Speed Limit Ahead", description: "Prepare to reduce your speed. The speed limit is changing ahead.", shape: "diamond", primaryColor: "yellow" },
  { id: "stop-yield-ahead", category: "warning", name: "Stop Ahead / Yield Ahead", description: "A stop sign or yield sign is ahead. Slow down and be ready to stop.", shape: "diamond", primaryColor: "yellow" },
  { id: "signal-ahead", category: "warning", name: "Signal Ahead", description: "Traffic signals are ahead. Slow down and be ready to stop.", shape: "diamond", primaryColor: "yellow" },
  { id: "no-passing-zone", category: "warning", name: "No Passing Zone", description: "This sign marks the beginning of a no-passing zone. You may not pass cars ahead of you in your lane, even if the way is clear." },
  { id: "merge", category: "warning", name: "Merge", description: "Two lanes of traffic moving in the same direction are about to become one. Drivers in both lanes are responsible for merging safely.", shape: "diamond", primaryColor: "yellow" },
  { id: "lane-reduction", category: "warning", name: "Lane Reduction", description: "The right lane ends soon. Drivers in the right lane must merge left when space opens up. Drivers in the left lane should allow other vehicles to merge smoothly.", shape: "diamond", primaryColor: "yellow" },
  { id: "divided-highway-begins", category: "warning", name: "Divided Highway Begins", description: "The highway ahead is split into two separate roadways by a median or divider, and each roadway is one-way. Keep right.", shape: "diamond", primaryColor: "yellow" },
  { id: "divided-highway-ends", category: "warning", name: "Divided Highway Ends", description: "The highway ahead no longer has a median or divider. Traffic goes in both directions. Keep right.", shape: "diamond", primaryColor: "yellow" },
  { id: "slippery-when-wet", category: "warning", name: "Slippery When Wet", description: "When the pavement is wet, reduce your speed. Do not brake hard or change direction suddenly. Increase the distance between your car and the one ahead of you.", shape: "diamond", primaryColor: "yellow" },
  { id: "low-clearance", category: "warning", name: "Low Clearance", description: "The overpass ahead has a low clearance. Do not proceed if your vehicle is taller than the height shown on the sign.", shape: "diamond", primaryColor: "yellow" },
  { id: "hill", category: "warning", name: "Hill", description: "A steep grade is ahead. Check your brakes.", shape: "diamond", primaryColor: "yellow" },
  { id: "deer-crossing", category: "warning", name: "Deer Crossing", description: "Deer cross the roadway in this area. Slow down, be alert and be ready to stop.", shape: "diamond", primaryColor: "yellow" },
  { id: "horse-drawn-buggies", category: "warning", name: "Horse-Drawn Buggies", description: "These regularly travel in the area. Slow down and don't use the horn. State law requires motorists to pass with at least three feet of clearance when the way is clear.", shape: "diamond", primaryColor: "yellow" },
  { id: "tractors-farm-equipment", category: "warning", name: "Tractors and Farm Equipment", description: "Regularly travel in the area. Be ready to slow down or stop. Only pass when the way is clear.", shape: "diamond", primaryColor: "yellow" },
  { id: "pedestrian-crossing", category: "warning", name: "Pedestrian Crossing", description: "Watch for people walking, riding bicycles or other devices entering a crosswalk or crossing your path. Slow down and be prepared to stop. A second sign with an arrow may show the actual location of the crosswalk.", shape: "diamond", primaryColor: "yellow-green" },
  { id: "bicycle-crossing", category: "warning", name: "Bicycle Crossing / Bike Path", description: "Bicycles regularly cross or ride beside traffic in this area. Drive with caution. A second sign with an arrow may show the actual location of the bike crossing.", shape: "diamond", primaryColor: "yellow-green" },
  { id: "school-zone", category: "warning", name: "School Zone / School Crossing", description: "Watch out for children crossing the street or playing. Be ready to slow down or stop at school zones and surrounding areas. Obey the speed limit and signals from crossing guards. A second sign with an arrow may show the actual location of the sidewalk.", shape: "pentagon", primaryColor: "yellow-green" },
  { id: "open-joints", category: "warning", name: "Open Joints on Bridge", description: "Slow down. Open joints on bridges or ramps could cause a motorcyclist to lose control.", shape: "diamond", primaryColor: "yellow" },
  { id: "expansion-joints", category: "warning", name: "Expansion Joints", description: "This sign is used when a joint across lanes creates a bump or is wide enough to cause loss of traction in wet weather.", shape: "diamond", primaryColor: "yellow" },
  { id: "intersections", category: "warning", name: "Intersections", description: "An intersection is ahead. Be alert for vehicles entering the road on which you are traveling.", shape: "diamond", primaryColor: "yellow" },
  { id: "y-intersection", category: "warning", name: "Y Intersection", description: "You must bear either right or left ahead.", shape: "diamond", primaryColor: "yellow" },
  { id: "t-intersection", category: "warning", name: "T Intersection", description: "The roadway you are traveling on ends ahead at a stop sign. You must turn right or left after yielding to oncoming traffic and pedestrians.", shape: "diamond", primaryColor: "yellow" },
  { id: "roundabout", category: "warning", name: "Roundabout", description: "Indicates a circular intersection with an island in the center is ahead. Also called traffic circles, these intersections may have one or more lanes. Entering traffic must yield right-of-way to traffic already in the circle and travel counterclockwise.", shape: "diamond", primaryColor: "yellow" },
  { id: "right-curve-side-road", category: "warning", name: "Right Curve – Side Road", description: "The road ahead curves right and a side road joins from the left within the curve. Be alert for vehicles entering the roadway you are traveling on.", shape: "diamond", primaryColor: "yellow" },
  { id: "sharp-right-turn", category: "warning", name: "Sharp Right Turn", description: "Slow down and be prepared for a sharp right turn in the road ahead.", shape: "diamond", primaryColor: "yellow" },
  { id: "sharp-right-left-turns", category: "warning", name: "Sharp Right and Left Turns", description: "Slow down and be prepared for the road ahead to turn sharply right, then left.", shape: "diamond", primaryColor: "yellow" },
  { id: "right-left-curves", category: "warning", name: "Right and Left Curves", description: "The road ahead curves right, then left. Slow down.", shape: "diamond", primaryColor: "yellow" },
  { id: "right-curve-safe-speed", category: "warning", name: "Right Curve with Safe Speed Indicator", description: "The road ahead curves right. Slow down to the safe speed indicated.", shape: "diamond", primaryColor: "yellow" },
  { id: "winding-road", category: "warning", name: "Winding Road", description: "The road ahead winds with a series of turns or curves. On all curves, slow down for better control.", shape: "diamond", primaryColor: "yellow" },
  { id: "rough-road", category: "warning", name: "Rough Road, Bump, or Uneven Lanes", description: "These signs are used when certain road conditions — such as loose gravel or road construction — affect the surface and create potentially difficult conditions for motorists, especially motorcyclists.", shape: "diamond", primaryColor: "orange" },
  { id: "rumble-strips-ahead", category: "warning", name: "Rumble Strips Ahead", description: "Warns motorists of black or orange strips placed across travel lanes in advance of work zones, including a flagger or lane closure. Rumble strips should be slowly driven over, not swerved around.", primaryColor: "orange" },
  { id: "slow-moving-vehicles", category: "warning", name: "Slow Moving Vehicles", description: "Vehicles traveling at 25 MPH or less — such as farm equipment, horse-drawn vehicles, or highway work vehicles — must display this sign on a public highway. Be prepared to adjust your speed or position when you see a vehicle with one of these signs.", shape: "triangle", primaryColor: "orange" },
  { id: "low-ground-railroad", category: "railroad", name: "Low Ground Railroad Crossing", description: "A steep slope where the railroad tracks cross the road may cause the bottom of low vehicles to get caught or drag on the tracks.", shape: "diamond", primaryColor: "yellow" },
  { id: "railroad-crossing", category: "railroad", name: "Railroad Crossing (Advance Warning)", description: "Advance warning signs are placed before a railroad crossing. They warn you to look, listen, slow down, and be prepared to stop for trains or any vehicles using the rails.", shape: "circle", primaryColor: "yellow" },
  { id: "crossbuck", category: "railroad", name: "Railroad Crossbuck", description: "This sign is a warning of a railroad crossing. Look, listen, slow down, and be prepared to stop for trains or any vehicles using the rails. Trains may approach from either direction. If there is more than one track, trains may be approaching from either direction on either track.", shape: "crossbuck" },
  { id: "crossbuck-flashing", category: "railroad", name: "Crossbuck with Flashing Lights", description: "Always stop when the lights begin to flash, and be alert for approaching trains. Do not proceed until all trains have passed, the tracks are clear, and the lights are no longer flashing. Be especially alert at multi-track crossings — a second train could be approaching from the opposite direction." },
  { id: "crossbuck-flashing-gate", category: "railroad", name: "Crossbuck, Flashing Lights and Gate", description: "Gates are used with flashing light signals at some crossings. Stop when the lights begin to flash and before the gates lower. Remain stopped until the gates are raised and the lights stop flashing. Do not attempt to drive around a lowered gate." },
  { id: "road-construction-detour", category: "work-zone", name: "Road Construction Ahead / Detour", description: "These signs indicate a change in the traffic pattern or route ahead. Slow down — unusual or potentially dangerous conditions are ahead.", shape: "diamond", primaryColor: "orange" },
  { id: "flashing-arrow-boards", category: "work-zone", name: "Flashing Arrow Boards", description: "Large flashing arrow boards or flashing message signs in work zones direct drivers to proceed into different traffic lanes and inform them that part of the road ahead is closed.", primaryColor: "orange" },
  { id: "flaggers", category: "work-zone", name: "Flaggers", description: "Flaggers are highway workers who normally wear orange or yellow vests, or yellow-green shirts or jackets. They use STOP/SLOW paddles or red flags to stop or direct traffic through the work zone, and to let other workers or construction vehicles cross the road.", primaryColor: "orange" },
  { id: "photo-speed-enforcement", category: "work-zone", name: "Photo Speed Enforcement", description: "This sign indicates that automated photo enforcement is in place for speeding in a work zone. Always obey the posted speed limit in a work zone.", primaryColor: "orange" },
  { id: "traffic-control-devices", category: "work-zone", name: "Traffic Control Devices", description: "Barricades, vertical signs, concrete barriers, drums and cones are the most common devices used to guide drivers safely through work zones. When driving near these devices, keep your vehicle in the middle of the lane and obey the posted speed limit. As you leave the work zone, stay in your lane and maintain your speed. Don't change lanes until you are completely clear of the work zone.", primaryColor: "orange" },
  { id: "red-markings", category: "pavement-markings", name: "Red Markings", description: "Generally not used. Some communities use red curbs to indicate no-parking zones.", primaryColor: "red" },
  { id: "red-reflectors", category: "pavement-markings", name: "Red Reflectors", description: "Show areas not to be entered or used. They are positioned on the road surface so that only traffic flowing in the wrong direction would observe them.", primaryColor: "red" },
  { id: "yellow-center-lines", category: "pavement-markings", name: "Yellow Center Lines", description: "Two-way traffic, flowing in opposite directions.", primaryColor: "yellow" },
  { id: "broken-yellow-center", category: "pavement-markings", name: "Broken Yellow Center Lines", description: "Passing on the left is allowed in either direction when the way ahead is clear.", primaryColor: "yellow" },
  { id: "broken-yellow-solid-yellow", category: "pavement-markings", name: "Broken Yellow Line Alongside Solid Yellow Line", description: "Passing is allowed from the side of the broken line, but not from the side of the solid line. Vehicles on the solid yellow line side may only cross the line to pass pedestrians, bicyclists, scooters or skateboards when the opposite lane is clear and you can pass safely.", primaryColor: "yellow" },
  { id: "double-solid-yellow", category: "pavement-markings", name: "Double Solid Yellow Lines", description: "Mark the center of the road and separate traffic traveling in two different directions. Passing is not allowed in either direction. You may not cross the lines unless making a left turn or passing pedestrians, bicyclists, or riders of scooters or skateboards, when the opposite lane is clear and you can pass safely.", primaryColor: "yellow" },
  { id: "broken-white", category: "pavement-markings", name: "Broken White Lines", description: "Separate lanes of traffic going in the same direction. You may change lanes with caution.", primaryColor: "white" },
  { id: "dotted-white", category: "pavement-markings", name: "Dotted White Lines", description: "Small rectangles in a series, each closely spaced to the next. Used to show lane assignment in intersections and interchanges where there might otherwise be a tendency to drift out of a lane. Often guide two turning lanes through an intersection. Also denote the opening of a turn lane and entrance/exit lanes at interchanges.", primaryColor: "white" },
  { id: "unmarked-two-lane", category: "pavement-markings", name: "Unmarked Two-Lane Roads in Liberia", description: "Many two-lane roads in Liberia do not have lane markings to separate the lanes. On an unmarked two-lane road, you may pass a slow-moving vehicle on the left side if there are no signs prohibiting passing. Make sure that the way is clear.", liberiaSpecific: true },
];

export const liberiaSpecificRules = [
  "Liberia law prohibits right and left turns at red arrow lights.",
  "In Liberia, U-turns are considered as two left turns and are illegal if a No Left Turn sign is posted.",
  "Many two-lane roads in Liberia do not have lane markings — pass slow-moving vehicles on the left only when the way is clear and no signs prohibit passing.",
  "School buses must always stop at railroad crossings, even when the lights are not flashing.",
  "Speeding in a highway work zone may result in a fine of up to $500. Using a handheld communications device in a work zone carries a $250 fine.",
];
