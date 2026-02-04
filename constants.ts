import { Exercise } from './types';

export const EXERCISES: Exercise[] = [
  {
    "id": 1,
    "title": "Lying on Elbows (Sphinx Pose)",
    "description": "Lie on your stomach. Lift your upper body onto your elbows as high as possible. Do not lift your hips off the floor.",
    "picture": "Person lying prone (face down), propping upper body up on forearms/elbows while keeping hips grounded.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 2,
    "title": "Angry Cat (Cat Stretch)",
    "description": "Start on hands and knees. Tuck your chin down towards your chest, tighten your abdominal muscles, and arch your back upwards.",
    "picture": "Person on all fours (hands and knees) with back arched high and head tucked down.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 3,
    "title": "Extension in Support (Cobra Variation)",
    "description": "Position yourself as shown in the picture. Do not lift your hips from the floor; relax your lower back and buttocks while pushing up with your hands.",
    "picture": "Person lying prone, pushing chest up with straight arms, hips remaining in contact with the floor.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 4,
    "title": "Back Stretching (Child's Pose)",
    "description": "Sit back onto your heels. Incline your chest toward the floor as much as possible to stretch the spine.",
    "picture": "Person kneeling, sitting back on heels, with upper body folded forward and arms stretched out on the floor.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 5,
    "title": "Lumbar Twists",
    "description": "Lie on your back with feet together and knees bent. Rotate your knees to the sides.",
    "picture": "Person lying supine (face up), knees bent, rotating legs to one side while keeping shoulders flat.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 6,
    "title": "Pelvic and Back Exercise (Pelvic Tilt)",
    "description": "Lie on your back. Flatten your spine against the floor by tightening your abdominal and back muscles.",
    "picture": "Person lying supine with knees bent, pressing the lower back flat into the floor.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 7,
    "title": "One Leg to Chest",
    "description": "Pull one bent knee towards your chest. This stretches the lumbar and gluteal muscles.",
    "picture": "Person lying supine, holding one knee with both hands and pulling it towards the chest.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 8,
    "title": "Knees to Chest",
    "description": "Press both bent knees towards your chest using your hands.",
    "picture": "Person lying supine, hugging both knees into the chest.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 9,
    "title": "Back Muscle Strengthening (Arm Lift)",
    "description": "From a quadruped position (all fours), lift one arm forward. Do not bend your neck; keep your back straight.",
    "picture": "Person on hands and knees extending one arm straight forward parallel to the floor.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 10,
    "title": "Back Muscle Strengthening (Leg Lift)",
    "description": "From a quadruped position, lift one leg parallel to the floor. Keep your neck and back straight.",
    "picture": "Person on hands and knees extending one leg straight back parallel to the floor.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 11,
    "title": "Back Muscle Strengthening (Bird-Dog)",
    "description": "Tighten abdominal muscles. Simultaneously lift one leg and the opposite arm.",
    "picture": "Person on hands and knees extending left leg back and right arm forward simultaneously.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 12,
    "title": "Neck and Abdominal Strengthening (Crunch)",
    "description": "Lie on the floor. Hands brought together in front of you. Feet braced on the floor. Lift head and shoulders off the floor.",
    "picture": "Person lying supine, knees bent, lifting upper back off the floor with arms reaching forward between knees.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  },
  {
    "id": 13,
    "title": "Neck and Abdominal Strengthening (Oblique Rotation)",
    "description": "Lie on the floor. Hands brought together. Lift head and shoulders and rotate/turn them to the sides.",
    "picture": "Person lying supine, knees bent, lifting upper body and twisting torso to the side with arms reaching past the knee.",
    "conditions": "Hold for 3 seconds. Repeat 10 times."
  }
];

export const TIMINGS = {
  PREPARE: 5, // Seconds to get ready for next exercise
  CONTRACT: 3, // Seconds to hold
  RELAX: 2, // Seconds to relax
  REPS: 10, // Total reps per exercise
};