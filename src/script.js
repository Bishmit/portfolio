const heroText = document.querySelector('.hero-text')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    const progress = Math.min(value / (window.innerHeight * 0.55), 1)

    // Move text upward and fade it out as user scrolls
    heroText.style.transform = `translate(-50%, calc(-50% - ${value * 0.55}px))`
    heroText.style.opacity = Math.max(0, 1 - progress * 1.8)

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

// Drawer / hamburger menu
;(function () {
    const hamburger    = document.getElementById('hamburger')
    const drawer       = document.getElementById('drawer')
    const overlay      = document.getElementById('drawerOverlay')
    const closeBtn     = document.getElementById('drawerClose')
    const drawerLinks  = drawer.querySelectorAll('.drawer-link')

    function openDrawer() {
        drawer.classList.add('open')
        overlay.classList.add('open')
        hamburger.classList.add('open')
        drawer.setAttribute('aria-hidden', 'false')
        document.body.style.overflow = 'hidden'
    }

    function closeDrawer() {
        drawer.classList.remove('open')
        overlay.classList.remove('open')
        hamburger.classList.remove('open')
        drawer.setAttribute('aria-hidden', 'true')
        document.body.style.overflow = ''
    }

    hamburger.addEventListener('click', openDrawer)
    closeBtn.addEventListener('click', closeDrawer)
    overlay.addEventListener('click', closeDrawer)
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer))

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeDrawer()
    })
})()

// Particle system
(function () {
    const canvas = document.getElementById('particles-canvas')
    const ctx = canvas.getContext('2d')

    function resize() {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 120
    const particles = []

    function rand(min, max) {
        return Math.random() * (max - min) + min
    }

    class Particle {
        constructor() { this.reset(true) }

        reset(initial) {
            this.x = rand(0, canvas.width)
            this.y = initial ? rand(0, canvas.height) : canvas.height + 5
            this.r = rand(0.5, 2.5)
            this.speed = rand(0.2, 0.7)
            this.opacity = rand(0.2, 0.9)
            this.drift = rand(-0.15, 0.15)
            // color: white/blue tones
            const hue = rand(200, 260)
            this.color = `hsla(${hue}, 80%, 85%, ${this.opacity})`
            this.twinkleSpeed = rand(0.005, 0.02)
            this.twinkleOffset = rand(0, Math.PI * 2)
        }

        update(t) {
            this.y -= this.speed
            this.x += this.drift
            const twinkle = Math.sin(t * this.twinkleSpeed * 60 + this.twinkleOffset)
            this.currentOpacity = this.opacity * (0.6 + 0.4 * twinkle)
            if (this.y < -5) this.reset(false)
        }

        draw() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
            ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${this.currentOpacity})`)
            ctx.shadowBlur = this.r * 4
            ctx.shadowColor = this.color
            ctx.fill()
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle())

    let last = 0
    function loop(ts) {
        const t = ts / 1000
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.shadowBlur = 0
        for (const p of particles) {
            p.update(t)
            p.draw()
        }
        requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
})()

