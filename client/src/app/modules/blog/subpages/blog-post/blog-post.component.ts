import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environment';

import { BlogPost } from '@/shared/types/blog.interface';
import { PageTitleComponent } from '@/shared/components/page-title/page-title.component';
import { PageNotFoundComponent } from '@/shared/components/page-not-found/page-not-found.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [PageTitleComponent, PageNotFoundComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent implements OnInit {
  post?: BlogPost;

  constructor(
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activedRoute.data.subscribe(({ post }) => {
      this.post = post;
    });
  }

  get featuredImageUrl(): string | undefined {
    return this.post?.featuredImage ? this.getDirectusImageUrl(`/assets/${this.post.featuredImage}`) : undefined;
  }

  getDirectusImageUrl(image: string): string {
    return `${environment.directus.url}${image}`;
  }
}
