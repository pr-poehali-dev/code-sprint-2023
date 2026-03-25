import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    bg: 'https://cdn.poehali.dev/projects/adb51761-29a5-483f-b037-84bb3d205e9a/files/64b3ca13-ee73-4507-a81f-bcf0c1de7edb.jpg',
    tag: 'Слайд 1 · Визитка',
    title: 'Елизавета Грицаенко',
    subtitle: 'Мой путь к сердцу педагога',
    slogan: 'Учить детей, вдохновлять сердцем и создавать контент с душой',
    content: 'card',
  },
  {
    id: 2,
    bg: 'https://cdn.poehali.dev/projects/adb51761-29a5-483f-b037-84bb3d205e9a/files/e6b506db-301f-4506-8952-6cfb2b6bacc3.jpg',
    tag: 'Слайд 2 · Профессия',
    title: 'Педагог начальных классов',
    subtitle: 'Архитектор детства',
    slogan: 'Учить детей, вдохновлять сердцем и создавать контент с душой',
    content: 'profession',
  },
  {
    id: 3,
    bg: 'https://cdn.poehali.dev/projects/adb51761-29a5-483f-b037-84bb3d205e9a/files/459bc2ea-a16b-442c-9c03-b7fba3973863.jpg',
    tag: 'Слайд 3 · Навыки',
    title: 'Мои суперсилы и цели',
    subtitle: 'Что умею и к чему стремлюсь',
    slogan: 'Учить детей, вдохновлять сердцем и создавать контент с душой',
    content: 'skills',
  },
  {
    id: 4,
    bg: 'https://cdn.poehali.dev/projects/adb51761-29a5-483f-b037-84bb3d205e9a/files/41dbff71-7fd0-4303-9205-cc1ce578db98.jpg',
    tag: 'Слайд 4 · Практика',
    title: 'Проба пера',
    subtitle: 'Моя гражданская активность',
    slogan: 'Учить детей, вдохновлять сердцем и создавать контент с душой',
    content: 'practice',
  },
  {
    id: 5,
    bg: 'https://cdn.poehali.dev/projects/adb51761-29a5-483f-b037-84bb3d205e9a/files/e6b506db-301f-4506-8952-6cfb2b6bacc3.jpg',
    tag: 'Слайд 5 · Будущее',
    title: 'Вектор профессионального развития',
    subtitle: 'Мои планы и мечты',
    slogan: 'Учить детей, вдохновлять сердцем и создавать контент с душой',
    content: 'future',
  },
];

function CardContent({ loaded }: { loaded: boolean }) {
  return (
    <div className={cn('transform transition-all duration-1000 delay-200 ease-out', loaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0')}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: '🩰', label: 'Танцы', desc: 'грация и ритм' },
            { icon: '🎥', label: 'Медиа', desc: 'стиль и содержание' },
            { icon: '🍎', label: 'Мероприятия', desc: 'активная позиция' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 rounded-full px-4 py-2" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <span className="text-lg">{item.icon}</span>
              <div>
                <span className="text-sm font-semibold text-white">{item.label}</span>
                <span className="ml-1 text-xs text-white/70">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 rounded-2xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          {[
            { label: 'Имя', value: 'Грицаенко Елизавета Дмитриевна' },
            { label: 'Возраст', value: '15 лет' },
            { label: 'Место', value: 'Рыбинский район, п. Песочное' },
            { label: 'Класс', value: '8-й' },
          ].map((row) => (
            <div key={row.label} className="flex gap-3">
              <span className="w-20 shrink-0 text-xs font-medium" style={{ color: 'rgba(255,200,210,0.9)' }}>{row.label}</span>
              <span className="text-sm text-white/90">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfessionContent({ loaded }: { loaded: boolean }) {
  return (
    <div className={cn('transform transition-all duration-1000 delay-200 ease-out', loaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0')}>
      <div className="flex flex-col gap-4">
        <p className="text-base leading-relaxed text-white/90">
          Не просто учить читать и писать — быть наставником, который помогает ребёнку <span style={{ color: '#ffd6e0' }}>полюбить школу</span>. Создавать уют и интерес на первых этапах взросления.
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,200,210,0.85)' }}>Почему я выбрала это</p>
          {[
            'Мне нравится работать с детьми, видеть их искренние эмоции',
            'Люблю организовывать мероприятия — это делает учёбу яркой',
            'Хочу объединить классическое образование с современными медиа',
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: '#f9a8d4' }} />
              <span className="text-sm text-white/85">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsContent({ loaded }: { loaded: boolean }) {
  const skills = [
    { name: 'Организатор', level: 85 },
    { name: 'Креативность', level: 92 },
    { name: 'Коммуникабельность', level: 88 },
  ];
  const growth = [
    'Возрастная психология младших школьников',
    'Педагогические методики (подготовка к колледжу)',
    'Медиа-навыки: съёмка, монтаж, обучающий контент',
  ];
  return (
    <div className={cn('transform transition-all duration-1000 delay-200 ease-out', loaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0')}>
      <div className="flex flex-col gap-5">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,200,210,0.85)' }}>Чем горжусь</p>
          <div className="flex flex-col gap-3">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm text-white/90">{s.name}</span>
                  <span className="text-xs text-white/60">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.level}%`, background: 'linear-gradient(90deg, #f9a8d4, #fb923c)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(167,243,208,0.9)' }}>Точки роста</p>
          {growth.map((g, i) => (
            <div key={i} className="flex items-start gap-2 py-1">
              <span className="text-sm" style={{ color: '#86efac' }}>◎</span>
              <span className="text-sm text-white/80">{g}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PracticeContent({ loaded }: { loaded: boolean }) {
  return (
    <div className={cn('transform transition-all duration-1000 delay-200 ease-out', loaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0')}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {[
            { icon: '🎉', text: 'Помощь в организации праздника «День Учителя»' },
            { icon: '🎨', text: 'Участие в оформлении школьного зала' },
            { icon: '🤝', text: 'Волонтёрство на школьных мероприятиях' },
            { icon: '📸', text: 'Создание фото- и видеоматериалов о жизни школы' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm text-white/90">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl px-4 py-3" style={{ background: 'rgba(249,168,212,0.2)', border: '1px solid rgba(249,168,212,0.3)' }}>
          <p className="text-sm italic text-white/90">Уже сейчас я не просто наблюдатель — я участник образовательного процесса.</p>
        </div>
      </div>
    </div>
  );
}

function FutureContent({ loaded }: { loaded: boolean }) {
  return (
    <div className={cn('transform transition-all duration-1000 delay-200 ease-out', loaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0')}>
      <div className="flex flex-col gap-4">
        {[
          {
            emoji: '🎯',
            title: 'Ближайшая цель (2025–2026)',
            color: '#f9a8d4',
            items: ['Успешно окончить 9 класс', 'Поступить в Рыбинский педагогический колледж'],
          },
          {
            emoji: '📈',
            title: 'Среднесрочный план',
            color: '#86efac',
            items: ['Глубокое педагогическое образование', 'Совмещать учёбу с практикой в школах', 'Развивать медиа-направление: блог класса, обучающие ролики'],
          },
          {
            emoji: '✨',
            title: 'Моя мечта',
            color: '#fde68a',
            items: ['Стать учителем, который вдохновляет детей своим примером', 'Организовывать яркие события, где каждый раскроет свой талант'],
          },
        ].map((block) => (
          <div key={block.title} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-base">{block.emoji}</span>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: block.color }}>{block.title}</span>
            </div>
            {block.items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 pl-6">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: block.color }} />
                <span className="text-sm text-white/85">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slide = slides[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ background: '#2a2a32' }}>
      {/* Background images */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={cn('absolute inset-0 transition-opacity duration-1200 ease-in-out', currentIndex === index ? 'opacity-100' : 'opacity-0')}
          >
            <img src={s.bg} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Pastel gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(40,40,50,0.92) 0%, rgba(55,55,65,0.82) 50%, rgba(40,45,55,0.75) 100%)' }} />

      {/* Decorative pastel circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #f9a8d4, transparent 70%)' }} />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #a5f3fc, transparent 70%)' }} />
        <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #fdba74, transparent 70%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-6">

            {/* Slide tag */}
            <div className={cn('transform transition-all duration-700 ease-out', isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0')}>
              <span className="rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase" style={{ background: 'rgba(249,168,212,0.25)', color: '#fce7f3', border: '1px solid rgba(249,168,212,0.4)', fontFamily: 'Montserrat, sans-serif' }}>
                {slide.tag}
              </span>
            </div>

            {/* Title */}
            <div className={cn('transform transition-all duration-1000 delay-100 ease-out', isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0')}>
              <h1 style={{ fontFamily: 'Comfortaa, cursive', fontWeight: 700, lineHeight: 1.15 }} className="text-4xl text-white md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }} className="mt-2 text-xl text-white/80 md:text-2xl">
                {slide.subtitle}
              </p>
            </div>

            {/* Dynamic content per slide */}
            {slide.content === 'card' && <CardContent loaded={isLoaded} />}
            {slide.content === 'profession' && <ProfessionContent loaded={isLoaded} />}
            {slide.content === 'skills' && <SkillsContent loaded={isLoaded} />}
            {slide.content === 'practice' && <PracticeContent loaded={isLoaded} />}
            {slide.content === 'future' && <FutureContent loaded={isLoaded} />}

            {/* Slogan */}
            <div className={cn('transform transition-all duration-1000 delay-500 ease-out', isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0')}>
              <p style={{ fontFamily: 'Comfortaa, cursive', fontWeight: 300, color: 'rgba(253,230,138,0.85)' }} className="text-sm italic md:text-base">
                «{slide.slogan}»
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((s, index) => (
          <button
            key={index}
            onClick={() => { setPrevIndex(currentIndex); setCurrentIndex(index); }}
            className="flex flex-col items-center gap-1 transition-all duration-300"
            aria-label={`Перейти к слайду ${index + 1}`}
          >
            <div className={cn('h-1 rounded-full transition-all duration-300', currentIndex === index ? 'w-10' : 'w-4')}
              style={{ background: currentIndex === index ? '#f9a8d4' : 'rgba(255,255,255,0.3)' }} />
            {currentIndex === index && (
              <span className="text-xs" style={{ color: 'rgba(253,230,138,0.7)', fontFamily: 'Montserrat, sans-serif' }}>{index + 1}/{slides.length}</span>
            )}
          </button>
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => { const prev = (currentIndex - 1 + slides.length) % slides.length; setPrevIndex(currentIndex); setCurrentIndex(prev); }}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
        aria-label="Предыдущий слайд"
      >
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={() => { const next = (currentIndex + 1) % slides.length; setPrevIndex(currentIndex); setCurrentIndex(next); }}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
        aria-label="Следующий слайд"
      >
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </section>
  );
}