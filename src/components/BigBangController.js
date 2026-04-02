// ────────────────────────────────────────────────────────
// BigBangController — Extended cosmic epoch state machine
// Phases 0-7: Singularity → Inflation → Cooling →
// Structure → Galaxy Formation → Stellar Evolution →
// Supernova Era → Heat Death → auto-rebirth.
// Fully randomized galaxy seeds each cycle.
// ────────────────────────────────────────────────────────

export class BigBangController {
    constructor() {
        this.time            = 0;
        this.phase           = 0;   // 0-7
        this.phaseName       = 'SINGULARITY';
        this.expansionRate   = 0;
        this.temperature     = 1e12;
        this.gravityStrength = 0;
        this.started         = false;
        this._prevPhase      = -1;

        // Galaxy formation — randomized each cycle
        this.galaxySeed    = Math.random() * 10000;
        this.numGalaxies   = 6 + Math.floor(Math.random() * 12);

        // Star lifecycle
        this.supernovaIntensity = 0;
        this.starFormationRate  = 0;

        // Quantum eccentricity
        this.quantumJitter = 0;

        // Black holes
        this.blackHoleStrength = 0;
        this.numBlackHoles     = 0;
        this.blackHoleSeed     = Math.random() * 10000;

        // Quantum bridges
        this.quantumBridgeStrength = 0;

        // Energy conglomerations
        this.conglomerationStrength = 0;

        // Collision intensity
        this.collisionIntensity = 0;

        // Auto-cycle
        this.cycleCount  = 0;
        this.needsReseed = false;

        // Extended epoch durations — slow, cinematic cosmic evolution
        this.epochs = [
            { name: 'SINGULARITY',         end: 10  },
            { name: 'COSMIC INFLATION',    end: 22  },
            { name: 'QUARK-GLUON PLASMA',  end: 36  },
            { name: 'HADRON EPOCH',        end: 50  },
            { name: 'NUCLEOSYNTHESIS',     end: 68  },
            { name: 'RECOMBINATION',       end: 88  },
            { name: 'STELLAR IGNITION',    end: 115 },
            { name: 'GALAXY FORMATION',    end: 150 },
            { name: 'STELLAR EVOLUTION',   end: 185 },
            { name: 'SUPERNOVA ERA',       end: 215 },
            { name: 'HEAT DEATH',          end: 250 },
        ];
    }

    start() {
        this.started = true;
        this.time = 0;
    }

    restart() {
        this.time            = 0;
        this.phase           = 0;
        this._prevPhase      = -1;
        this.phaseName       = 'SINGULARITY';
        this.expansionRate   = 0;
        this.temperature     = 1e12;
        this.gravityStrength = 0;
        this.supernovaIntensity = 0;
        this.starFormationRate  = 0;
        this.quantumJitter      = 0;
        this.blackHoleStrength  = 0;
        this.numBlackHoles      = 0;
        this.blackHoleSeed      = Math.random() * 10000;
        this.quantumBridgeStrength = 0;
        this.conglomerationStrength = 0;
        this.collisionIntensity = 0;
        this.started         = true;
        this.cycleCount++;

        // Fully randomize galaxy configuration each rebirth
        this.galaxySeed  = Math.random() * 10000;
        this.numGalaxies = 6 + Math.floor(Math.random() * 12);
        this.needsReseed = true;
    }

    update(dt) {
        if (!this.started) return;
        this.time += dt;

        // Auto-cycle: after heat death, trigger rebirth
        if (this.time >= 250) {
            this.restart();
            return;
        }

        // Determine epoch label
        for (const epoch of this.epochs) {
            if (this.time < epoch.end) {
                this.phaseName = epoch.name;
                break;
            }
        }

        const t = this.time;

        if (t < 10) {
            // ── SINGULARITY ─────────────────────────
            this.phase           = 0;
            this.expansionRate   = 0.05;
            this.temperature     = 1e12;
            this.gravityStrength = 0.5;
            this.quantumJitter   = 0.8 + 0.2 * Math.sin(t * 3.0);
            this.starFormationRate  = 0;
            this.supernovaIntensity = 0;
            this.blackHoleStrength  = 0;
            this.numBlackHoles      = 0;
            this.quantumBridgeStrength = 0.3;
            this.conglomerationStrength = 0;
            this.collisionIntensity = 0.1;

        } else if (t < 22) {
            // ── INFLATION ───────────────────────────
            this.phase = 1;
            const p = (t - 10) / 12;
            const eased = p * p * (3 - 2 * p);
            this.expansionRate   = 2.0 + eased * 30.0;
            this.temperature     = 1e12 * Math.exp(-p * 3);
            this.gravityStrength = 0.3;
            this.quantumJitter   = 1.5 * (1 - p * 0.5);
            this.starFormationRate  = 0;
            this.supernovaIntensity = 0;
            this.blackHoleStrength  = 0;
            this.numBlackHoles      = 0;
            this.quantumBridgeStrength = 0.5 * (1 - p);
            this.conglomerationStrength = p * 0.2;
            this.collisionIntensity = 0.3 + p * 0.4;

        } else if (t < 68) {
            // ── COOLING (Quark-Gluon → Nucleosynthesis) ─
            this.phase = 2;
            const p = (t - 22) / 46;
            this.expansionRate   = Math.max(0.3, 5.0 * (1 - p));
            this.temperature     = 1e9 * Math.exp(-p * 4);
            this.gravityStrength = 1.0 + p * 2.0;
            this.quantumJitter   = 0.3 + 0.4 * Math.sin(t * 0.7);
            this.starFormationRate  = p * 0.2;
            this.supernovaIntensity = 0;
            this.blackHoleStrength  = p * 0.3;
            this.numBlackHoles      = Math.floor(p * 3);
            this.quantumBridgeStrength = 0.2 + p * 0.3;
            this.conglomerationStrength = 0.2 + p * 0.4;
            this.collisionIntensity = 0.5 + p * 0.3;

        } else if (t < 115) {
            // ── STRUCTURE + STELLAR IGNITION ────────
            this.phase = 3;
            const p = (t - 68) / 47;
            this.expansionRate   = 0.2 + 0.1 * Math.sin(t * 0.1);
            this.temperature     = Math.max(2.725, this.temperature * 0.9995);
            this.gravityStrength = 3.0 + p * 3.0;
            this.quantumJitter   = 0.2 + 0.3 * Math.sin(t * 1.3) * Math.cos(t * 0.7);
            this.starFormationRate  = 0.3 + p * 0.7;
            this.supernovaIntensity = p * 0.2;
            this.blackHoleStrength  = 0.3 + p * 0.5;
            this.numBlackHoles      = 3 + Math.floor(p * 4);
            this.quantumBridgeStrength = 0.4 + p * 0.3;
            this.conglomerationStrength = 0.5 + p * 0.4;
            this.collisionIntensity = 0.7 + p * 0.3;

        } else if (t < 150) {
            // ── GALAXY FORMATION (peak structure) ───
            this.phase = 4;
            const p = (t - 115) / 35;
            this.expansionRate   = 0.15 + 0.05 * Math.sin(t * 0.08);
            this.temperature     = Math.max(2.725, 80.0 * (1 - p) + 2.725);
            this.gravityStrength = 5.0 + p * 2.5;
            this.quantumJitter   = 0.15 + 0.15 * Math.abs(Math.sin(t * 2.1));
            this.starFormationRate  = 1.0;
            this.supernovaIntensity = 0.3 + p * 0.3;
            this.blackHoleStrength  = 0.7 + p * 0.3;
            this.numBlackHoles      = 6 + Math.floor(p * 4);
            this.quantumBridgeStrength = 0.6;
            this.conglomerationStrength = 0.8 + p * 0.2;
            this.collisionIntensity = 1.0;

        } else if (t < 185) {
            // ── STELLAR EVOLUTION ────────────────────
            this.phase = 5;
            const p = (t - 150) / 35;
            this.expansionRate   = 0.1;
            this.temperature     = 2.725;
            this.gravityStrength = 6.5 + Math.sin(t * 0.05) * 1.0;
            this.quantumJitter   = 0.1 + 0.15 * Math.sin(t * 3.7);
            this.starFormationRate  = 1.0 - p * 0.3;
            this.supernovaIntensity = 0.6 + p * 0.4;
            this.blackHoleStrength  = 1.0;
            this.numBlackHoles      = 8 + Math.floor(p * 4);
            this.quantumBridgeStrength = 0.5 - p * 0.2;
            this.conglomerationStrength = 0.8;
            this.collisionIntensity = 0.9 + p * 0.1;

        } else if (t < 215) {
            // ── SUPERNOVA ERA (dramatic deaths) ─────
            this.phase = 6;
            const p = (t - 185) / 30;
            this.expansionRate   = 0.08 - p * 0.03;
            this.temperature     = 2.725;
            this.gravityStrength = 5.0 - p * 2.0;
            this.quantumJitter   = 0.5 + 0.5 * Math.sin(t * 5.0);
            this.starFormationRate  = 0.3 * (1 - p);
            this.supernovaIntensity = 1.0;
            this.blackHoleStrength  = 1.0 + p * 0.5;
            this.numBlackHoles      = 10 + Math.floor(p * 6);
            this.quantumBridgeStrength = 0.3 * (1 - p);
            this.conglomerationStrength = 0.6 * (1 - p * 0.5);
            this.collisionIntensity = 1.0;

        } else {
            // ── HEAT DEATH (fade to darkness) ───────
            this.phase = 7;
            const p = Math.min((t - 215) / 35, 1);
            const fadeOut = 1 - p;
            this.expansionRate   = 0.02 * fadeOut;
            this.temperature     = 2.725 * Math.max(0.01, fadeOut);
            this.gravityStrength = 1.0 * fadeOut;
            this.quantumJitter   = 0.05 * fadeOut;
            this.starFormationRate  = 0;
            this.supernovaIntensity = 0.3 * fadeOut;
            this.blackHoleStrength  = 1.5 * fadeOut;
            this.numBlackHoles      = Math.floor(16 * fadeOut);
            this.quantumBridgeStrength = 0.1 * fadeOut;
            this.conglomerationStrength = 0.2 * fadeOut;
            this.collisionIntensity = 0.2 * fadeOut;
        }

        this._prevPhase = this.phase;
    }

    shouldPulseHaptic() {
        if (this.phase === 1 && this.time > 4 && this.time < 6
            && Math.random() < 0.3) return true;
        if (this.phase !== this._prevPhase && this._prevPhase >= 0) return true;
        if (this.supernovaIntensity > 0.8 && Math.random() < 0.1) return true;
        return false;
    }
}
