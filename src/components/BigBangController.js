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

        // Auto-cycle
        this.cycleCount  = 0;
        this.needsReseed = false;

        this.epochs = [
            { name: 'SINGULARITY',         end: 4   },
            { name: 'COSMIC INFLATION',    end: 9   },
            { name: 'QUARK-GLUON PLASMA',  end: 14  },
            { name: 'HADRON EPOCH',        end: 19  },
            { name: 'NUCLEOSYNTHESIS',     end: 26  },
            { name: 'RECOMBINATION',       end: 34  },
            { name: 'STELLAR IGNITION',    end: 44  },
            { name: 'GALAXY FORMATION',    end: 58  },
            { name: 'STELLAR EVOLUTION',   end: 70  },
            { name: 'SUPERNOVA ERA',       end: 80  },
            { name: 'HEAT DEATH',          end: 95  },
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
        if (this.time >= 95) {
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

        if (t < 4) {
            // ── SINGULARITY ─────────────────────────
            this.phase           = 0;
            this.expansionRate   = 0.05;
            this.temperature     = 1e12;
            this.gravityStrength = 0.5;
            this.quantumJitter   = 0.8 + 0.2 * Math.sin(t * 3.0);
            this.starFormationRate  = 0;
            this.supernovaIntensity = 0;

        } else if (t < 9) {
            // ── INFLATION ───────────────────────────
            this.phase = 1;
            const p = (t - 4) / 5;
            const eased = p * p * (3 - 2 * p);
            this.expansionRate   = 2.0 + eased * 30.0;
            this.temperature     = 1e12 * Math.exp(-p * 3);
            this.gravityStrength = 0.3;
            this.quantumJitter   = 1.5 * (1 - p * 0.5);
            this.starFormationRate  = 0;
            this.supernovaIntensity = 0;

        } else if (t < 26) {
            // ── COOLING (Quark-Gluon → Nucleosynthesis) ─
            this.phase = 2;
            const p = (t - 9) / 17;
            this.expansionRate   = Math.max(0.3, 5.0 * (1 - p));
            this.temperature     = 1e9 * Math.exp(-p * 4);
            this.gravityStrength = 1.0 + p * 2.0;
            this.quantumJitter   = 0.3 + 0.4 * Math.sin(t * 0.7);
            this.starFormationRate  = p * 0.2;
            this.supernovaIntensity = 0;

        } else if (t < 44) {
            // ── STRUCTURE + STELLAR IGNITION ────────
            this.phase = 3;
            const p = (t - 26) / 18;
            this.expansionRate   = 0.2 + 0.1 * Math.sin(t * 0.1);
            this.temperature     = Math.max(2.725, this.temperature * 0.9995);
            this.gravityStrength = 3.0 + p * 3.0;
            this.quantumJitter   = 0.2 + 0.3 * Math.sin(t * 1.3) * Math.cos(t * 0.7);
            this.starFormationRate  = 0.3 + p * 0.7;
            this.supernovaIntensity = p * 0.2;

        } else if (t < 58) {
            // ── GALAXY FORMATION (peak structure) ───
            this.phase = 4;
            const p = (t - 44) / 14;
            this.expansionRate   = 0.15 + 0.05 * Math.sin(t * 0.08);
            this.temperature     = Math.max(2.725, 80.0 * (1 - p) + 2.725);
            this.gravityStrength = 5.0 + p * 2.5;
            this.quantumJitter   = 0.15 + 0.15 * Math.abs(Math.sin(t * 2.1));
            this.starFormationRate  = 1.0;
            this.supernovaIntensity = 0.3 + p * 0.3;

        } else if (t < 70) {
            // ── STELLAR EVOLUTION ────────────────────
            this.phase = 5;
            const p = (t - 58) / 12;
            this.expansionRate   = 0.1;
            this.temperature     = 2.725;
            this.gravityStrength = 6.5 + Math.sin(t * 0.05) * 1.0;
            this.quantumJitter   = 0.1 + 0.15 * Math.sin(t * 3.7);
            this.starFormationRate  = 1.0 - p * 0.3;
            this.supernovaIntensity = 0.6 + p * 0.4;

        } else if (t < 80) {
            // ── SUPERNOVA ERA (dramatic deaths) ─────
            this.phase = 6;
            const p = (t - 70) / 10;
            this.expansionRate   = 0.08 - p * 0.03;
            this.temperature     = 2.725;
            this.gravityStrength = 5.0 - p * 2.0;
            this.quantumJitter   = 0.5 + 0.5 * Math.sin(t * 5.0);
            this.starFormationRate  = 0.3 * (1 - p);
            this.supernovaIntensity = 1.0;

        } else {
            // ── HEAT DEATH (fade to darkness) ───────
            this.phase = 7;
            const p = Math.min((t - 80) / 15, 1);
            const fadeOut = 1 - p;
            this.expansionRate   = 0.02 * fadeOut;
            this.temperature     = 2.725 * Math.max(0.01, fadeOut);
            this.gravityStrength = 1.0 * fadeOut;
            this.quantumJitter   = 0.05 * fadeOut;
            this.starFormationRate  = 0;
            this.supernovaIntensity = 0.3 * fadeOut;
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
