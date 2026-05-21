// ============================================================
//  CONFIG — Customize settings, reload page to see changes
// ============================================================

const CONFIG = {

    // =================== PARTICLES ===================
    // Number of particles per sphere (total = x2). Higher = prettier but heavier
    BALL_COUNT: 10000,

    // Base size of each particle (Three.js PointsMaterial)
    PARTICLE_BASE_SIZE: 0.3,

    // =================== RED BALL (left hand) ===================
    RED: {
        // Core sphere
        coreRatio: 0.12,        // % of particles in core (0.0 - 1.0)
        coreRadius: 7,          // Core radius
        coreColor: { r: 3, g: 0.1, b: 0.1 },   // Core color (values > 1 = brighter)
        coreSize: 2.5,          // Core particle size

        // Spiral arms
        arms: 3,                // Number of spiral arms
        spiralSpeed: 15,        // Spiral speed (higher = tighter)
        spiralRadius: 30,       // Max spiral radius
        spiralStartRadius: 2,   // Start radius
        spiralDepth: 8,         // Depth along Z axis
        armColor: { r: 0.8, g: 0, b: 0 },
        armSize: 1.0,

        // Rotation
        rotationSpeed: -0.08,   // Rotation speed (negative = counter-clockwise)

        // Bloom & shake
        bloom: 2.5,
        shake: 0.25,
    },

    // =================== BLUE BALL (right hand) ===================
    BLUE: {
        // Core sphere
        coreRatio: 0.12,        // % of particles in core (0.0 - 1.0)
        coreRadius: 7,          // Core radius
        coreColor: { r: 0.2, g: 0.6, b: 3.0 },   // Increased brightness (b > 1) to match Red bloom (3.0)
        coreSize: 2.5,          // Core particle size

        // Spiral arms
        arms: 3,                // Number of spiral arms
        spiralSpeed: 15,        // Spiral speed (higher = tighter)
        spiralRadius: 30,       // Max spiral radius
        spiralStartRadius: 2,   // Start radius
        spiralDepth: 8,         // Depth along Z axis
        armColor: { r: 0, g: 0.2, b: 0.9 },
        armSize: 1.0,

        // Rotation
        rotationSpeed: -0.08,   // Rotation speed (negative = counter-clockwise)

        // Bloom & shake
        bloom: 2.5,
        shake: 0.25,
    },

    // =================== PURPLE (fusion) ===================
    PURPLE: {
        coreRatio: 0.8,         // 80% particles in core sphere, 20% floating around
        coreRadius: 12,
        coreColor: { r: 0.6, g: 0.5, b: 1.0 },
        coreSize: 1,

        outerSpread: 50,        // How far outer particles spread
        outerColor: { r: 0.5, g: 0.5, b: 0.7 },
        outerSize: 0.8,

        rotationSpeedA: 0.15,   // Red system rotation
        rotationSpeedB: -0.12,  // Blue system rotation (opposite)
        rotationY: 0.03,

        fusionDistance: 220,     // Screen distance (px) to trigger fusion

        bloom: 1,
        shake: 1,
    },

    // =================== FUSION ANIMATION (binary star orbit) ===================
    FUSION: {
        // Phase 1: Binary star orbit
        orbitSpeed: 0.08,           // Orbit speed (rad/frame)
        orbitStartRadius: 20,       // Initial orbit radius (world units)

        // Phase 2: Spiral inward
        spiralShrinkRate: 0.97,     // Each frame radius *= this value (< 1 = pull inward)
        spiralSpeedUp: 1.02,        // Rotation speed increases gradually
        collisionRadius: 2,         // When radius < this → collision

        // Phase 3: Explosion + formation
        explosionDuration: 40,      // Number of explosion frames
        explosionScatter: 60,       // How far particles scatter during explosion
        explosionBloom: 6.0,        // Bloom during explosion
        explosionShake: 1.5,        // Shake during explosion
        reformSpeed: 0.08,          // Speed at which particles return to purple sphere

        // Effects during orbit
        orbitBloom: 3.5,
        orbitShake: 0.3,
    },

    // =================== UNLIMITED VOID ===================
    VOID: {
        ringRadius: 22,             // Main accretion ring radius
        ringColor: { r: 1, g: 1, b: 1 },
        ringSize: 2.5,

        outerMinRadius: 25,
        outerMaxRadius: 95,
        outerColor: { r: 0.1, g: 0.6, b: 1.0 },
        outerSize: 0.7,

        rotationZ: 0.004,           // Z-axis rotation speed
        rotationX: 0.001,           // X-axis rotation speed (3D feel)

        bloom: 3,
        shake: 0,

        posX: 0,    // negative = left, positive = right
        posY: -5,   // positive = up, negative = down
        posZ: 0,

        // Warp speed intro (hyperspace travel)
        warpDuration: 60,           // Warp intro frames (higher = longer)
        warpSpeed: 10,              // Horizontal streak speed
        warpBloom: 5.0,             // Intense bloom
        warpShake: 2.0,             // Strong shake
    },

    // =================== BLOOM (post-processing) ===================
    BLOOM: {
        defaultStrength: 1.8,   // Default on initialization
        radius: 0.4,
        threshold: 0.85,
    },

    // =================== GESTURE DETECTION ===================
    DETECTION: {
        crossedFingerThreshold: 0.045,  // Tip distance to count as crossed
        snapCooldownFrames: 30,         // Cooldown frames after each shot
        chargeFrames: 20,               // Frames to hold 3 fingers before firing (~1 second)
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.6,
    },

    // =================== ANIMATION ===================
    ANIMATION: {
        positionLerpSpeed: 0.5,    // Sphere follow-hand speed (0-1)
        morphLerpSpeed: 0.1,       // Particle morph speed to new shape
        fadeInSpeed: 0.08,         // Appear speed
        fadeOutSpeed: 0.04,        // Disappear speed
        shakeMultiplier: 12,       // Screen shake intensity
        neutralRotation: 0.005,    // Rotation when no technique active
    },

    // =================== PROJECTILE (finger snap) ===================
    PROJECTILE: {
        speed: 20,              // Base flight speed
        duration: 100,          // Flight frames (long enough to pass camera)
        redDirection: { x: 1, y: 0.2, z: 1 },     // Flies toward viewer
        blueDirection: { x: -1, y: 0.2, z: 1 },    // Flies toward viewer
        purpleDirection: { x: 0, y: 0.2, z: 1 },   // Flies toward viewer
    },

    // =================== CAMERA ===================
    CAMERA: {
        width: 1280,
        height: 720,
        cameraZ: 55,            // 3D camera distance
        fov: 75,                // Field of view
    },

    // =================== DEBUG ===================
    DEBUG: {
        showLandmarks: true,    // Show hand skeleton on screen (true/false)
    },
};

export default CONFIG;
