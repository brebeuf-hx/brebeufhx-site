# BrébeufHx Web Components

This directory contains reusable web components for the BrébeufHx website, built with vanilla JavaScript and Tailwind CSS.

## Components Overview

### 1. Navbar Component (`<navbar-component>`)
A complete navigation bar with language switching and mobile menu functionality.

**Usage:**
```html
<navbar-component></navbar-component>
```

**Features:**
- Language switching (EN/FR)
- Mobile responsive hamburger menu
- Smooth scrolling navigation
- Dynamic background on scroll
- Automatic language event dispatching

### 2. Hero Section Component (`<hero-section>`)
A hero section with animated snowflakes, stats, and call-to-action buttons.

**Usage:**
```html
<hero-section></hero-section>
```

**Features:**
- Animated snowflakes
- Floating ice crystals
- Bilingual content support
- Responsive design
- Automatic snowflake generation

### 3. Feature Card Component (`<feature-card>`)
A reusable card for displaying features with icons and descriptions.

**Usage:**
```html
<feature-card 
    icon="fas fa-users" 
    title="❄️ Team Up" 
    title-en="❄️ Team Up" 
    title-fr="❄️ Former une équipe"
    description="Form teams of 1-4 students and collaborate on innovative solutions"
    desc-en="Form teams of 1-4 students and collaborate on innovative solutions"
    desc-fr="Formez des équipes de 1 à 4 étudiants et collaborez sur des solutions innovantes">
</feature-card>
```

**Attributes:**
- `icon`: FontAwesome icon class
- `title`: Default title text
- `title-en`: English title
- `title-fr`: French title
- `description`: Default description
- `desc-en`: English description
- `desc-fr`: French description

### 4. Timeline Item Component (`<timeline-item>`)
A timeline item for displaying schedule events.

**Usage:**
```html
<timeline-item 
    title="❄️ Day 1 - Opening" 
    title-en="❄️ Day 1 - Opening" 
    title-fr="❄️ Jour 1 - Ouverture"
    events="9:00 AM - Registration & Check-in::9:00 AM - Registration & Check-in::9h00 - Inscription et accueil|10:00 AM - Opening Ceremony::10:00 AM - Opening Ceremony::10h00 - Cérémonie d'ouverture"
    index="0">
</timeline-item>
```

**Attributes:**
- `title`: Default title
- `title-en`: English title
- `title-fr`: French title
- `events`: Pipe-separated list of events (format: `text::en::fr|text::en::fr`)
- `index`: Index for timeline positioning

### 5. FAQ Item Component (`<faq-item>`)
A FAQ item for displaying questions and answers.

**Usage:**
```html
<faq-item 
    question="Do I need to know how to code?" 
    question-en="Do I need to know how to code?" 
    question-fr="Dois-je savoir programmer ?"
    answer="Not at all! We welcome students of all skill levels."
    answer-en="Not at all! We welcome students of all skill levels."
    answer-fr="Pas du tout ! Nous accueillons les étudiants de tous niveaux.">
</faq-item>
```

**Attributes:**
- `question`: Default question
- `question-en`: English question
- `question-fr`: French question
- `answer`: Default answer
- `answer-en`: English answer
- `answer-fr`: French answer

### 6. Stats Card Component (`<stats-card>`)
A card for displaying statistics.

**Usage:**
```html
<stats-card 
    number="24" 
    label="Hours" 
    label-en="Hours" 
    label-fr="Heures">
</stats-card>
```

**Attributes:**
- `number`: The statistic number
- `label`: Default label
- `label-en`: English label
- `label-fr`: French label

## Language System

All components support bilingual content through a custom event system:

1. **Language Change Event**: Components listen for `languageChanged` events
2. **Data Attributes**: Content is stored in `data-en` and `data-fr` attributes
3. **Automatic Updates**: Components automatically update when language changes

## Setup Instructions

1. **Include Tailwind CSS** and FontAwesome in your HTML
2. **Load all component scripts** before using them
3. **Use components** in your HTML as shown in the examples above

## Example Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Load Components -->
    <script src="components/Navbar.js"></script>
    <script src="components/HeroSection.js"></script>
    <script src="components/FeatureCard.js"></script>
    
    <!-- Use Components -->
    <navbar-component></navbar-component>
    <hero-section></hero-section>
    
    <div class="grid grid-cols-3 gap-6">
        <feature-card 
            icon="fas fa-users" 
            title="Team Up" 
            title-en="Team Up" 
            title-fr="Former une équipe"
            description="Work together"
            desc-en="Work together"
            desc-fr="Travailler ensemble">
        </feature-card>
    </div>
</body>
</html>
```

## Benefits

- **Reusability**: Components can be used across multiple pages
- **Maintainability**: Centralized logic and styling
- **Consistency**: Ensures uniform appearance and behavior
- **Scalability**: Easy to add new components or modify existing ones
- **Bilingual Support**: Built-in language switching functionality
- **Responsive**: All components are mobile-friendly
- **Performance**: Lightweight vanilla JavaScript implementation 
