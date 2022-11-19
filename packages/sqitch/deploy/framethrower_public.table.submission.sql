-- Deploy flipr:framethrower_public.table.submission to pg

begin;

  create table framethrower_public.submission(
    id text primary key not null default framethrower_hidden.generate_short_unique_id('framethrower_public.animation', 12),
    start_frame integer,
    end_frame integer,
    thumbnail_url text,
    animation_id text references framethrower_public.animation(id) on delete cascade,
    video_url text,
    frame_rate text not null default '24/1',
    audio boolean not null default false,
    comment text,
    short_comment text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    status framethrower_public.publish_status not null default 'published'
  );

  grant select on table framethrower_public.submission to framethrower_user, framethrower_banned, framethrower_inactive, framethrower_anonymous, framethrower_moderator, framethrower_admin;

commit;
