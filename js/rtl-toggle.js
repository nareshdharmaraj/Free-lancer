/**
 * LexIcon - RTL/LTR Alignment Toggle
 * Handles comprehensive text direction switching with proper alignment changes
 */

class AlignmentManager {
  constructor() {
    this.currentDir = localStorage.getItem('textDirection') || 'ltr';
    this.isToggling = false;
    this.init();
  }

  init() {
    // Set initial direction
    document.documentElement.setAttribute('dir', this.currentDir);
    
    // Apply initial alignment
    setTimeout(() => this.applyFullAlignment(), 100);
    
    // Bind toggle button
    this.bindToggleButton();
  }

  applyFullAlignment() {
    const isRTL = this.currentDir === 'rtl';
    
    // Apply body-level direction
    document.body.setAttribute('dir', this.currentDir);
    document.documentElement.setAttribute('dir', this.currentDir);
    
    // Text alignment for all text elements
    this.applyTextAlignment(isRTL);
    
    // Layout alignment for flex containers
    this.applyLayoutAlignment(isRTL);
    
    // Dashboard-specific alignments
    this.applyDashboardAlignment(isRTL);
    
    // Form elements alignment
    this.applyFormAlignment(isRTL);
    
    // Navigation alignment
    this.applyNavigationAlignment(isRTL);
  }

  applyTextAlignment(isRTL) {
    const textElements = document.querySelectorAll(`
      p, h1, h2, h3, h4, h5, h6, span, a, button, label, 
      td, th, div:not(.no-rtl), li
    `);
    
    textElements.forEach(el => {
      if (el.closest('.no-rtl')) return;
      
      if (isRTL) {
        el.style.textAlign = 'right';
        el.style.direction = 'rtl';
      } else {
        el.style.textAlign = '';
        el.style.direction = '';
      }
    });
  }

  applyLayoutAlignment(isRTL) {
    // Flex containers
    const flexContainers = document.querySelectorAll(`
      .flex, [class*="flex-"], .grid,
      header .flex, .sidebar nav,
      .tab-button, .settings-tab-button
    `);
    
    flexContainers.forEach(el => {
      if (el.closest('.no-rtl')) return;
      
      const computedStyle = window.getComputedStyle(el);
      const isColumn = computedStyle.flexDirection.includes('column');
      
      if (isRTL && !isColumn) {
        el.style.flexDirection = 'row-reverse';
        el.style.direction = 'rtl';
      } else if (isRTL && isColumn) {
        el.style.direction = 'rtl';
      } else {
        el.style.flexDirection = '';
        el.style.direction = '';
      }
    });
  }

  applyDashboardAlignment(isRTL) {
    // Sidebar navigation items
    document.querySelectorAll('#sidebar nav a').forEach(el => {
      if (isRTL) {
        el.style.flexDirection = 'row-reverse';
        el.style.paddingRight = '1rem';
        el.style.paddingLeft = '1rem';
      } else {
        el.style.flexDirection = '';
        el.style.paddingRight = '';
        el.style.paddingLeft = '';
      }
    });
    
    // Header elements and top navigation
    document.querySelectorAll('header .flex').forEach(el => {
      if (isRTL) {
        el.style.flexDirection = 'row-reverse';
      } else {
        el.style.flexDirection = '';
      }
    });

    // Horizontal tab navigation bars
    document.querySelectorAll('.border-b.border-slate-200, .flex.gap-8.border-b, [role="tablist"]').forEach(tabBar => {
      if (isRTL) {
        tabBar.style.flexDirection = 'row-reverse';
      } else {
        tabBar.style.flexDirection = '';
      }
    });
    
    // Individual tab buttons and highlights
    document.querySelectorAll('[role="tab"], .tab-btn').forEach(tab => {
      if (isRTL) {
        tab.style.textAlign = 'right';
      } else {
        tab.style.textAlign = '';
      }
    });
    
    // Main tab container
    document.querySelectorAll('.flex.gap-2').forEach(tabContainer => {
      if (!tabContainer.closest('#sidebar')) {
        if (isRTL) {
          tabContainer.style.flexDirection = 'row-reverse';
        } else {
          tabContainer.style.flexDirection = '';
        }
      }
    });
    
    // Stats cards and premium cards
    document.querySelectorAll('.glass, .premium-card, .glass-dark').forEach(card => {
      const flexElements = card.querySelectorAll('.flex');
      flexElements.forEach(el => {
        if (el.closest('.no-rtl')) return;
        
        if (isRTL) {
          el.style.flexDirection = 'row-reverse';
        } else {
          el.style.flexDirection = '';
        }
      });
    });
    
    // Admin dashboard main container and sidebar positioning
    const adminContainer = document.getElementById('main-container');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('main');
    
    if (adminContainer && sidebar && mainContent) {
      if (isRTL) {
        adminContainer.style.flexDirection = 'row-reverse';
        sidebar.style.borderRight = 'none';
        sidebar.style.borderLeft = '1px solid #1e293b';
      } else {
        adminContainer.style.flexDirection = '';
        sidebar.style.borderRight = '1px solid #1e293b';
        sidebar.style.borderLeft = 'none';
      }
    }
    
    // Admin header content
    const adminHeader = document.getElementById('admin-header-content');
    if (adminHeader) {
      if (isRTL) {
        adminHeader.style.flexDirection = 'row-reverse';
      } else {
        adminHeader.style.flexDirection = '';
      }
    }
    
    // Sidebar navigation items (both admin and user dashboard)
    document.querySelectorAll('#sidebar nav a, .tab-nav-btn').forEach(el => {
      if (isRTL) {
        el.style.flexDirection = 'row-reverse';
        el.style.textAlign = 'right';
      } else {
        el.style.flexDirection = '';
        el.style.textAlign = '';
      }
    });
    
    // Admin dashboard tab buttons
    document.querySelectorAll('.tab-button').forEach(tab => {
      if (isRTL) {
        tab.style.textAlign = 'right';
      } else {
        tab.style.textAlign = '';
      }
    });
    
    // All gap containers (admin dashboard)
    document.querySelectorAll('.flex.gap-3, .flex.gap-4, .flex.gap-6, .flex.gap-8').forEach(container => {
      if (!container.closest('#sidebar')) {
        if (isRTL) {
          container.style.flexDirection = 'row-reverse';
        } else {
          container.style.flexDirection = '';
        }
      }
    });
    
    // Tables
    document.querySelectorAll('table').forEach(table => {
      if (isRTL) {
        table.style.direction = 'rtl';
      } else {
        table.style.direction = '';
      }
    });
    
    // Notification badges and absolute positioned elements
    document.querySelectorAll('.absolute').forEach(el => {
      if (el.closest('.no-rtl')) return;
      
      const hasRight = el.style.right || el.classList.toString().includes('right');
      const hasLeft = el.style.left || el.classList.toString().includes('left');
      
      if (isRTL) {
        if (hasRight) {
          el.style.left = el.style.right;
          el.style.right = 'auto';
        }
      } else {
        if (hasLeft && el.style.left !== 'auto') {
          el.style.right = el.style.left;
          el.style.left = 'auto';
        }
      }
    });
  }

  applyFormAlignment(isRTL) {
    document.querySelectorAll('input, textarea, select').forEach(el => {
      if (el.closest('.no-rtl')) return;
      
      if (isRTL) {
        el.style.textAlign = 'right';
        el.style.direction = 'rtl';
      } else {
        el.style.textAlign = '';
        el.style.direction = '';
      }
    });
  }

  applyNavigationAlignment(isRTL) {
    // Main website navigation
    const mainNavbar = document.getElementById('main-navbar');
    const navbarContent = document.getElementById('navbar-content');
    
    if (navbarContent) {
      if (isRTL) {
        navbarContent.style.flexDirection = 'row-reverse';
      } else {
        navbarContent.style.flexDirection = '';
      }
    }
    
    // Desktop navigation links container
    document.querySelectorAll('.hidden.md\\:flex.items-center.space-x-8').forEach(navLinks => {
      if (isRTL) {
        navLinks.style.flexDirection = 'row-reverse';
        navLinks.style.gap = '2rem';
        navLinks.classList.remove('space-x-8');
        navLinks.classList.add('space-x-reverse', 'space-x-8');
      } else {
        navLinks.style.flexDirection = '';
        navLinks.style.gap = '';
        navLinks.classList.remove('space-x-reverse');
        navLinks.classList.add('space-x-8');
      }
    });
    
    // Action buttons container
    document.querySelectorAll('.hidden.md\\:flex.items-center.space-x-4').forEach(actionBtns => {
      if (isRTL) {
        actionBtns.style.flexDirection = 'row-reverse';
        actionBtns.style.gap = '1rem';
        actionBtns.classList.remove('space-x-4');
        actionBtns.classList.add('space-x-reverse', 'space-x-4');
      } else {
        actionBtns.style.flexDirection = '';
        actionBtns.style.gap = '';
        actionBtns.classList.remove('space-x-reverse');
        actionBtns.classList.add('space-x-4');
      }
    });
    
    // Logo container alignment
    document.querySelectorAll('.flex.items-center').forEach(logoContainer => {
      // Only target logo containers, not all flex containers
      if (logoContainer.querySelector('.fas.fa-balance-scale') || logoContainer.querySelector('a[href="index.html"]')) {
        if (isRTL) {
          logoContainer.style.flexDirection = 'row-reverse';
        } else {
          logoContainer.style.flexDirection = '';
        }
      }
    });
    
    // Dashboard sidebar (if present)
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('main');
    const container = document.querySelector('.flex.h-screen');
    
    if (sidebar && mainContent && container) {
      if (isRTL) {
        container.style.flexDirection = 'row-reverse';
        sidebar.style.borderRight = 'none';
        sidebar.style.borderLeft = '1px solid #e2e8f0';
        sidebar.style.order = '2';
        mainContent.style.order = '1';
      } else {
        container.style.flexDirection = '';
        sidebar.style.borderRight = '1px solid #e2e8f0';
        sidebar.style.borderLeft = 'none';
        sidebar.style.order = '';
        mainContent.style.order = '';
      }
    }
    
    // Sidebar navigation items (dashboard)
    document.querySelectorAll('#sidebar nav a').forEach(el => {
      if (isRTL) {
        el.style.flexDirection = 'row-reverse';
        el.style.textAlign = 'right';
      } else {
        el.style.flexDirection = '';
        el.style.textAlign = '';
      }
    });
    
    // Tab containers
    document.querySelectorAll('.flex.gap-2').forEach(el => {
      if (isRTL) {
        el.style.flexDirection = 'row-reverse';
      } else {
        el.style.flexDirection = '';
      }
    });
  }

  bindToggleButton() {
    // Check for multiple possible button IDs
    const toggleBtn = document.getElementById('rtl-toggle-btn') || 
                     document.getElementById('language-toggle') || 
                     document.querySelector('[data-toggle="rtl"]');
    
    if (!toggleBtn) {
      console.log('RTL toggle button not found');
      return;
    }
    
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleDirection();
    });
  }

  toggleDirection() {
    if (this.isToggling) return;
    
    this.isToggling = true;
    
    // Toggle direction
    this.currentDir = this.currentDir === 'ltr' ? 'rtl' : 'ltr';
    
    // Save to localStorage
    localStorage.setItem('textDirection', this.currentDir);
    
    // Add transition for smooth change
    document.body.style.transition = 'all 0.3s ease';
    
    // Apply direction changes
    this.applyFullAlignment();
    
    // Visual feedback
    this.showDirectionChange();
    
    // Reset transition after change
    setTimeout(() => {
      document.body.style.transition = '';
      this.isToggling = false;
    }, 300);
  }

  // Alias method for dashboard compatibility
  toggleAlignment() {
    this.toggleDirection();
  }

  showDirectionChange() {
    const direction = this.currentDir.toUpperCase();
    
    // Create temporary notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        font-size: 14px;
        font-weight: 600;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
      ">
        Direction: ${direction}
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
      notification.firstElementChild.style.opacity = '1';
      notification.firstElementChild.style.transform = 'translateX(0)';
    }, 10);
    
    // Hide and remove notification
    setTimeout(() => {
      notification.firstElementChild.style.opacity = '0';
      notification.firstElementChild.style.transform = 'translateX(100px)';
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 2000);
  }
}

// Export for use in HTML
if (typeof window !== 'undefined') {
  window.AlignmentManager = AlignmentManager;
}
