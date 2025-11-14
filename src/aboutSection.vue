<template>
  <div class="container mx-auto px-3 py-12">
    <div class="w-full flex items-center justify-center">
      <div
        class="grid w-fit max-w-5xl items-center justify-items-center-safe md:flex md:flex-row gap-6 bg-neutral-700 p-6 rounded-lg shadow-lg overflow-hidden"
      >
        <div class="relative shrink-0">
          <img
            src="/public/bg-foto.jpg"
            alt="full-body-image"
            class="w-full h-auto max-h-[500px] max-w-[460px] object-cover rounded-lg shadow-lg"
          />
          <div class="absolute bottom-0">
            <img
              src="/public/full-body.png"
              alt="full-body-image"
              class="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div class="md:flex-non">
          <h2 class="text-3xl font-bold mb-4">About Me</h2>
          <p class="mb-4">
            Hello! I'm [Your Name], a passionate developer with a love for creating dynamic and
            responsive web applications. With a background in [Your Background], I enjoy turning
            complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the latest tech trends, contributing to
            open-source projects, or indulging in my hobbies like [Your Hobbies]. Let's connect and
            create something amazing together!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
