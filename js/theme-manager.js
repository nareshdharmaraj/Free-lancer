/**
 * LexIcon - Theme Manager
 * Handles dark/light mode switching with smooth transitions
 */

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.isTransitioning = false;
        this.init();
    }

    init() {
        // Apply saved theme immediately to prevent flash
        this.applyTheme(this.currentTheme, false);

        // Bind toggle buttons after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bindToggleButtons());
        } else {
            this.bindToggleButtons();
        }

        // Listen for system theme changes
        this.watchSystemTheme();
    }

    bindToggleButtons() {
        // Desktop theme toggle
        const desktopToggle = document.getElementById('theme-toggle');
        if (desktopToggle) {
            desktopToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Mobile theme toggle
        const mobileToggle = document.getElementById('mobile-theme-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Update button icons
        this.updateToggleIcons();
    }

    toggleTheme() {
        if (this.isTransitioning) return;

        this.isTransitioning = true;
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';

        // Apply theme with transition
        this.applyTheme(newTheme, true);

        // Save preference
        this.currentTheme = newTheme;
        localStorage.setItem('theme', newTheme);

        // Update toggle icons
        this.updateToggleIcons();

        // Show notification
        this.showThemeNotification(newTheme);

        // Reset transition lock
        setTimeout(() => {
            this.isTransitioning = false;
        }, 300);
    }

    applyTheme(theme, withTransition = true) {
        const root = document.documentElement;

        // Add transition class if needed
        if (withTransition) {
            root.classList.add('theme-transitioning');
        }

        // Apply theme
        if (theme === 'dark') {
            root.classList.add('dark-mode');
            root.setAttribute('data-theme', 'dark');
        } else {
            root.classList.remove('dark-mode');
            root.setAttribute('data-theme', 'light');
        }

        // Remove transition class after animation
        if (withTransition) {
            setTimeout(() => {
                root.classList.remove('theme-transitioning');
            }, 300);
        }
    }

    updateToggleIcons() {
        const desktopToggle = document.getElementById('theme-toggle');
        const mobileToggle = document.getElementById('mobile-theme-toggle');

        const isDark = this.currentTheme === 'dark';
        const iconClass = isDark ? 'fa-sun' : 'fa-moon';
        const title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

        if (desktopToggle) {
            const icon = desktopToggle.querySelector('i');
            if (icon) {
                icon.className = `fas ${iconClass} text-xl`;
            }
            desktopToggle.setAttribute('title', title);
        }

        if (mobileToggle) {
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = `fas ${iconClass} mr-2`;
            }
        }
    }

    watchSystemTheme() {
        // Check if user prefers dark mode
        if (window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // Only apply system preference if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                this.currentTheme = darkModeQuery.matches ? 'dark' : 'light';
                this.applyTheme(this.currentTheme, false);
                this.updateToggleIcons();
            }

            // Listen for system theme changes
            darkModeQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    this.currentTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(this.currentTheme, true);
                    this.updateToggleIcons();
                }
            });
        }
    }

    showThemeNotification(theme) {
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
      <div class="theme-notification-content">
        <i class="fas fa-${theme === 'dark' ? 'moon' : 'sun'} mr-2"></i>
        <span>${theme === 'dark' ? 'Dark' : 'Light'} Mode Activated</span>
      </div>
    `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 2000);
    }

    // Public method to get current theme
    getCurrentTheme() {
        return this.currentTheme;
    }

    // Public method to set theme programmatically
    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            console.error('Invalid theme. Use "light" or "dark".');
            return;
        }

        this.currentTheme = theme;
        this.applyTheme(theme, true);
        localStorage.setItem('theme', theme);
        this.updateToggleIcons();
    }
}

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.ThemeManager = ThemeManager;
}

// Auto-initialize if not already done
if (typeof window !== 'undefined' && !window.themeManager) {
    window.themeManager = new ThemeManager();
}
