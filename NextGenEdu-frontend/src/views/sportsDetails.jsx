import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/sports-details.css";

const sportsData = {
  football: {
    features: [
      {
        title: 'Ball Control',
        icon: 'bi-circle',
        description: 'Master ball control techniques with personalized video feedback from professional coaches'
      },
      {
        title: 'Passing Skills',
        icon: 'bi-arrow-left-right',
        description: 'Learn precise passing through interactive drills and real-time technique analysis'
      },
      {
        title: 'Shooting',
        icon: 'bi-bullseye',
        description: 'Develop powerful and accurate shooting with virtual target practice and form correction'
      },
      {
        title: 'Game Strategy',
        icon: 'bi-diagram-3',
        description: 'Understand tactical gameplay through interactive match simulations and strategy sessions'
      },
      {
        title: 'Team Play',
        icon: 'bi-people',
        description: 'Practice team coordination with virtual team exercises and live online scrimmages'
      },
      {
        title: 'Fitness Training',
        icon: 'bi-heart-pulse',
        description: 'Follow personalized fitness programs with live tracking and progress monitoring'
      }
    ],
    levels: [
      {
        title: 'Beginner',
        subtitle: 'First Touch',
        icon: 'bi-1-circle-fill',
        description: 'Start your football journey with fundamental skills and basic techniques through interactive video lessons and virtual practice sessions.'
      },
      {
        title: 'Intermediate',
        subtitle: 'Skill Builder',
        icon: 'bi-2-circle-fill',
        description: 'Enhance your gameplay with advanced techniques and tactical understanding using AI-powered training drills.'
      },
      {
        title: 'Advanced',
        subtitle: 'Elite Player',
        icon: 'bi-3-circle-fill',
        description: 'Master professional-level skills with personalized coaching and advanced match analysis tools.'
      }
    ],
    curriculum: [
      {
        week: '1-4',
        title: 'Core Skills',
        topics: [
          'Basic ball control and dribbling',
          'Passing techniques and accuracy',
          'Shooting fundamentals',
          'Individual fitness routines'
        ]
      },
      {
        week: '5-8',
        title: 'Advanced Techniques',
        topics: [
          'Advanced dribbling skills',
          'Long-range passing',
          'Shot power and precision',
          'Position-specific training'
        ]
      },
      {
        week: '9-12',
        title: 'Team Tactics',
        topics: [
          'Team formations',
          'Game strategies',
          'Set-piece execution',
          'Match analysis'
        ]
      }
    ]
  },
  cricket: {
    features: [
      {
        title: 'Batting Mastery',
        icon: 'bi-bullseye',
        description: 'Perfect your batting technique with virtual nets and real-time stroke analysis'
      },
      {
        title: 'Bowling Skills',
        icon: 'bi-arrow-repeat',
        description: 'Develop various bowling styles with motion tracking and speed monitoring'
      },
      {
        title: 'Fielding Excellence',
        icon: 'bi-lightning-charge',
        description: 'Enhance catching and throwing skills through interactive fielding drills'
      },
      {
        title: 'Match Strategy',
        icon: 'bi-diagram-3',
        description: 'Learn game tactics with virtual match scenarios and decision-making exercises'
      },
      {
        title: 'Fitness & Agility',
        icon: 'bi-heart-pulse',
        description: 'Custom fitness programs designed for cricket with progress tracking'
      },
      {
        title: 'Mental Training',
        icon: 'bi-brain',
        description: 'Build mental toughness through visualization and pressure situation simulations'
      }
    ],
    levels: [
      {
        title: 'Foundation',
        subtitle: 'Basic Techniques',
        icon: 'bi-1-circle-fill',
        description: 'Learn cricket fundamentals through interactive video lessons and virtual practice sessions.'
      },
      {
        title: 'Academy',
        subtitle: 'Skill Development',
        icon: 'bi-2-circle-fill',
        description: 'Advance your cricket skills with specialized online training and performance analysis.'
      },
      {
        title: 'Professional',
        subtitle: 'Match Ready',
        icon: 'bi-3-circle-fill',
        description: 'Prepare for competitive cricket with advanced online coaching and match simulations.'
      }
    ],
    curriculum: [
      {
        week: '1-4',
        title: 'Cricket Basics',
        topics: [
          'Batting stance and grip',
          'Basic bowling actions',
          'Fielding positions',
          'Cricket rules and etiquette'
        ]
      },
      {
        week: '5-8',
        title: 'Skill Enhancement',
        topics: [
          'Shot selection',
          'Bowling variations',
          'Advanced fielding',
          'Match awareness'
        ]
      },
      {
        week: '9-12',
        title: 'Match Practice',
        topics: [
          'Virtual match scenarios',
          'Team strategies',
          'Pressure situations',
          'Performance analysis'
        ]
      }
    ]
  },
  basketball: {
    features: [
      {
        title: 'Shooting Form',
        icon: 'bi-bullseye',
        description: 'Perfect your shooting technique with AI form analysis and virtual training'
      },
      {
        title: 'Dribbling Skills',
        icon: 'bi-arrow-repeat',
        description: 'Master ball handling with interactive drills and rhythm training'
      },
      {
        title: 'Court Vision',
        icon: 'bi-eye',
        description: 'Develop game awareness through virtual court scenarios and decision making'
      },
      {
        title: 'Defense',
        icon: 'bi-shield',
        description: 'Learn defensive techniques with position tracking and footwork analysis'
      },
      {
        title: 'Team Play',
        icon: 'bi-people',
        description: 'Practice team coordination with virtual team exercises'
      },
      {
        title: 'Basketball IQ',
        icon: 'bi-brain',
        description: 'Enhance strategic thinking with play analysis and game situations'
      }
    ],
    levels: [
      {
        title: 'Rookie',
        subtitle: 'Getting Started',
        icon: 'bi-1-circle-fill',
        description: 'Begin your basketball journey with fundamental skills through interactive online training.'
      },
      {
        title: 'Varsity',
        subtitle: 'Building Skills',
        icon: 'bi-2-circle-fill',
        description: 'Develop advanced techniques and game understanding with virtual coaching.'
      },
      {
        title: 'Elite',
        subtitle: 'Pro Level',
        icon: 'bi-3-circle-fill',
        description: 'Master professional skills with personalized online training and advanced analytics.'
      }
    ],
    curriculum: [
      {
        week: '1-4',
        title: 'Fundamentals',
        topics: [
          'Shooting mechanics',
          'Basic dribbling',
          'Defensive stance',
          'Basketball rules'
        ]
      },
      {
        week: '5-8',
        title: 'Advanced Skills',
        topics: [
          'Advanced ball handling',
          'Shot creation',
          'Team defense',
          'Fast break execution'
        ]
      },
      {
        week: '9-12',
        title: 'Game Ready',
        topics: [
          'Game situations',
          'Team strategies',
          'Leadership skills',
          'Performance analysis'
        ]
      }
    ]
  },
  tennis: {
    features: [
      {
        title: 'Stroke Technique',
        icon: 'bi-arrow-repeat',
        description: 'Master tennis strokes with video analysis and virtual coaching'
      },
      {
        title: 'Serve Power',
        icon: 'bi-lightning-charge',
        description: 'Develop powerful serves with motion tracking and technique feedback'
      },
      {
        title: 'Court Movement',
        icon: 'bi-arrow-left-right',
        description: 'Improve footwork and agility through interactive movement drills'
      },
      {
        title: 'Match Strategy',
        icon: 'bi-diagram-3',
        description: 'Learn game tactics with virtual match scenarios and strategy sessions'
      },
      {
        title: 'Mental Game',
        icon: 'bi-brain',
        description: 'Build mental toughness with pressure situation training'
      },
      {
        title: 'Physical Fitness',
        icon: 'bi-heart-pulse',
        description: 'Tennis-specific fitness programs with progress tracking'
      }
    ],
    levels: [
      {
        title: 'Beginner',
        subtitle: 'First Serve',
        icon: 'bi-1-circle-fill',
        description: 'Start your tennis journey with basic techniques through interactive online lessons.'
      },
      {
        title: 'Club Player',
        subtitle: 'Skill Building',
        icon: 'bi-2-circle-fill',
        description: 'Develop competitive skills with virtual coaching and performance analysis.'
      },
      {
        title: 'Tournament',
        subtitle: 'Advanced Play',
        icon: 'bi-3-circle-fill',
        description: 'Master advanced techniques with professional online training and match preparation.'
      }
    ],
    curriculum: [
      {
        week: '1-4',
        title: 'Tennis Basics',
        topics: [
          'Forehand and backhand',
          'Serve technique',
          'Basic footwork',
          'Tennis scoring'
        ]
      },
      {
        week: '5-8',
        title: 'Advanced Strokes',
        topics: [
          'Shot variations',
          'Serve placement',
          'Court positioning',
          'Match tactics'
        ]
      },
      {
        week: '9-12',
        title: 'Match Play',
        topics: [
          'Game strategies',
          'Point construction',
          'Mental toughness',
          'Tournament prep'
        ]
      }
    ]
  }
};

const SportsDetails = () => {
  const location = useLocation();
  const { heading, subheading, sport } = location.state || {};
  const sportData = sport ? sportsData[sport.toLowerCase()] : null;

  if (!sportData) {
    return (
      <div className="container py-5 text-center">
        <h1>Sport Not Found</h1>
        <p className="mb-4">Please select a sport from the home page to view its details.</p>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="sports-details">
      <div className="sports-hero text-center">
        <div className="sports-details-container">
          <h1>{heading}</h1>
          <p>{subheading}</p>
          <p className="mt-4 h5 text-light">Master {sport} from anywhere with interactive online training</p>
        </div>
      </div>

      <div className="sports-details-container">
        <div className="content-section">
          <h2 className="section-title">
            <i className="bi bi-trophy"></i>
            Key Features
          </h2>
          <div className="feature-grid">
            {sportData.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            <i className="bi bi-graph-up"></i>
            Training Levels
          </h2>
          <div className="feature-grid">
            {sportData.levels.map((level, index) => (
              <div key={index} className="level-card">
                <div className="level-header">
                  <div className="level-icon">
                    <i className={`bi ${level.icon}`}></i>
                  </div>
                  <div className="level-title">
                    <h4>{level.title}</h4>
                    <p>{level.subtitle}</p>
                  </div>
                </div>
                <div className="level-content">
                  {level.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            <i className="bi bi-journal-text"></i>
            Training Curriculum
          </h2>
          <div className="feature-grid">
            {sportData.curriculum.map((module, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <i className="bi bi-calendar-week"></i>
                </div>
                <div className="feature-content">
                  <h4>Week {module.week}: {module.title}</h4>
                  <ul className="mt-2 mb-0">
                    {module.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="enroll-section">
          <button className="enroll-btn">
            <i className="bi bi-arrow-right-circle"></i>
            Start Your {sport} Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsDetails;
