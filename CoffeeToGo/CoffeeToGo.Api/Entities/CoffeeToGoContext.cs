using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CoffeeToGo.Api.Entities
{
    public partial class CoffeeToGoContext : DbContext
    {
        public virtual DbSet<Beverage> Beverage { get; set; }
        public virtual DbSet<BeverageIngredient> BeverageIngredient { get; set; }
        public virtual DbSet<Ingredient> Ingredient { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }

        public CoffeeToGoContext(DbContextOptions<CoffeeToGoContext> options)
    : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=localhost\SQLServer2014;AttachDbFilename=|DataDirectory|\CoffeeToGo.mdf;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Beverage>(entity =>
            {
                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<BeverageIngredient>(entity =>
            {
                entity.HasKey(e => new { e.BeverageId, e.IngredientId });

                entity.HasOne(d => d.Beverage)
                    .WithMany(p => p.BeverageIngredient)
                    .HasForeignKey(d => d.BeverageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BeverageIngredient_Beverage");

                entity.HasOne(d => d.Ingredient)
                    .WithMany(p => p.BeverageIngredient)
                    .HasForeignKey(d => d.IngredientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BeverageIngredient_Ingredient");
            });

            modelBuilder.Entity<Ingredient>(entity =>
            {
                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.Property(e => e.Notes).HasMaxLength(500);

                entity.Property(e => e.OrderedBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Beverage)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.BeverageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Orders_Beverage");
            });
        }
    }
}
