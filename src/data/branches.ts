export interface Branch {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  emergencyNumber: string;
  workingHours: string;
  isOpen: boolean;
  mechanicsAvailable: number;
}

export const BRANCHES: Branch[] = [
  {
    id: "b1",
    name: "NeuroGears Central Workshop",
    address: "123 Engine Ave, Motor City, MC 10001",
    latitude: 34.0522, // Los Angeles coords as an example
    longitude: -118.2437,
    emergencyNumber: "+1 (555) 012-3456",
    workingHours: "24/7",
    isOpen: true,
    mechanicsAvailable: 5,
  },
  {
    id: "b2",
    name: "NeuroGears Westside Auto Clinic",
    address: "456 Turbo Blvd, Motor City, MC 10002",
    latitude: 34.0622,
    longitude: -118.2537,
    emergencyNumber: "+1 (555) 098-7654",
    workingHours: "24/7",
    isOpen: true,
    mechanicsAvailable: 3,
  },
  {
    id: "b3",
    name: "NeuroGears Elite Performance",
    address: "789 RPM Street, Motor City, MC 10003",
    latitude: 34.0422,
    longitude: -118.2337,
    emergencyNumber: "+1 (555) 111-2222",
    workingHours: "8:00 AM - 8:00 PM",
    isOpen: true,
    mechanicsAvailable: 2,
  }
];
