// ────────────────────────────────────────────────────────
// BigBangController — Cosmic epoch state machine
// Manages phase transitions, expansion rate, temperature,
// and gravity strength across the simulation timeline.
// Enhanced with smoother transitions and richer dynamics.
// ────────────────────────────────────────────────────────

export class BigBangController {
    constructor() {
        this.time         = 0;
        this.phase        = 0;   // 0 singularity · 1 inflation · 2 cooling · 3 structure
        this.phaseName    = 'SINGULARITY';
        this.expansionRate   = 0;
        this.temperature     = 1e12;
        this.gravityStrength = 0;
        this.started         = false;
        this._prevPhase      = -1;

        this.epochs = [
            { name: 'SINGULARITY',           end: 3   },
            { name: 'COSMIC INFLATION',      end: 7   },
            { name: 'QUARK EPOCH',           end: 12  },
            { name: 'HADRON EPOCH',          end: 17  },
            { name: 'NUCLEOSYNTHESIS',       end: 24  },
            { name: 'RECOMBINATION',         end: 35  },
            { name: 'STRUCTURE FORMATION',   end: Infinity },
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
        this.started         = true;
    }

    update(dt) {
        if (!this.started) return;
        this.time += dt;

        // Determine epoch label
        for (const epoch of this.epochs) {
            if (this.time < epoch.end) {
                this.phaseName = epoch.name;
                break;
            }
        }

        const t = this.time;

        if (t < 3) {
            // ── SINGULARITY ─────────────────────────
            this.phase           = 0;
            this.expansionRate   = 0.05;
            this.temperature     = 1e12;
            this.gravityStrength = 0.5;

        } else if (t < 7) {
            // ── INFLATION ───────────────────────────
            this.phase = 1;
            const p = (t - 3) / 4;                        // 0 → 1
            // Smooth ease-in-out for expansion
            const eased = p * p * (3 - 2 * p);
            this.expansionRate   = 2.0 + eased * 30.0;
            this.temperature     = 1e12 * Math.exp(-p * 3);
            this.gravityStrength = 0.3;

        } else if (t < 24) {
            // ── COOLING (Quark → Nucleosynthesis) ───
            this.phase = 2;
            const p = (t - 7) / 17;                       // 0 → 1
            this.expansionRate   = Math.max(0.3, 5.0 * (1 - p));
            this.temperature     = 1e9 * Math.exp(-p * 4);
            this.gravityStrength = 1.0 + p * 2.0;

        } else {
            // ── STRUCTURE FORMATION ─────────────────
            this.phase = 3;
            const p = Math.min((t - 24) / 30, 1);         // 0 → 1 over 30 s
            this.expansionRate   = 0.2 + 0.1 * Math.sin(t * 0.1);
            this.temperature     = Math.max(2.725, this.temperature * 0.9995);
            this.gravityStrength = 3.0 + p * 2.0;
        }

        this._prevPhase = this.phase;
    }

    /** Returns true when a haptic pulse should fire this frame. */
    shouldPulseHaptic() {
        // Short bursts during early inflation + phase transitions
        if (this.phase === 1 && this.time > 3 && this.time < 5
            && Math.random() < 0.3) return true;
        // Single pulse on phase change
        if (this.phase !== this._prevPhase && this._prevPhase >= 0) return true;
        return false;
    }
}
